import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import './FilteredSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faFilter, faSearch, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const FilteredSearch = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [chapterSearch, setChapterSearch] = useState('');
  const [subjectList, setSubjectList] = useState([]);
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    // Clear subject and type when class changes
    setSelectedType('');
    setSelectedSubject('');
    setSubjectList([]);
    setFilteredChapters([]);
    setChapterSearch('');
  }, [selectedClass]);

  useEffect(() => {
    const fetchSubjects = async () => {
      if (selectedClass && selectedType) {
        setIsLoading(true);
        setError(null);
        const db = getDatabase();
        const subjectRef = ref(db, `${selectedType}/class ${selectedClass}`);
        try {
          const snapshot = await get(subjectRef);
          if (snapshot.exists()) {
            setSubjectList(Object.keys(snapshot.val()));
          } else {
            setSubjectList([]);
          }
        } catch (err) {
          setError('Failed to load subjects.');
          console.error("Error fetching subjects:", err);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSubjectList([]);
      }
    };

    fetchSubjects();
  }, [selectedClass, selectedType]);

  const handleChapterSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setChapterSearch(newSearchTerm);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    setDebounceTimeout(
      setTimeout(() => {
        if (selectedClass && selectedSubject && selectedType && newSearchTerm.length > 0) {
          handleSearch(newSearchTerm);
        } else {
          setFilteredChapters([]);
        }
      }, 300)
    );
  };

  const handleSearch = async (searchTerm = chapterSearch) => {
    if (!selectedClass || !selectedSubject || !selectedType || !searchTerm) {
      setFilteredChapters([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    setFilteredChapters([]);

    const db = getDatabase();
    const chapterRef = ref(db, `${selectedType}/class ${selectedClass}/${selectedSubject}`);

    try {
      const snapshot = await get(chapterRef);
      if (snapshot.exists()) {
        const chapters = snapshot.val();
        const results = Object.entries(chapters).filter(([_, val]) =>
          val.chapterName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredChapters(results);
      } else {
        setFilteredChapters([]);
      }
    } catch (err) {
      setError('Failed to search chapters.');
      console.error("Error searching chapters:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="filtered-search-container">
      <h2><FontAwesomeIcon icon={faBookOpen} className="mr-2" /> Filtered NCERT Search</h2>
      <div className="filters">
        <div className="filter-row">
          <div className="input-group">
            <label htmlFor="classSelect">Class:</label>
            <select
              id="classSelect"
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
              }}
            >
              <option value="">Select Class</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="typeSelect">Type:</label>
            <select id="typeSelect" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="">Select Type</option>
              <option value="ncertbooks">NCERT Books</option>
              <option value="chapterwisenotes">Chapterwise Notes</option>
              <option value="exercisesolutions">Exercise Solutions</option>
            </select>
          </div>

          {subjectList.length > 0 && (
            <div className="input-group">
              <label htmlFor="subjectSelect">Subject:</label>
              <select
                id="subjectSelect"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">Select Subject</option>
                {subjectList.map((subj, i) => (
                  <option key={i} value={subj}>{subj}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="search-row">
          <div className="input-group">
            <label htmlFor="chapterInput">Chapter:</label>
            <input
              type="text"
              id="chapterInput"
              placeholder="Enter Chapter Name"
              value={chapterSearch}
              onChange={handleChapterSearchChange}
            />
          </div>
        </div>
      </div>

      {error && <p className="error-message">⚠️ {error}</p>}

      <div className="results">
        {isLoading && <p className="loading-message">⏳ Searching for chapters...</p>}
        {!isLoading && filteredChapters.length > 0 ? (
          <ul>
            {filteredChapters.map(([key, val]) => (
              <li key={key}>
                <a href={val.fileUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" /> {val.chapterName} ({key})
                </a>
              </li>
            ))}
          </ul>
        ) : (!isLoading && <p>No results found. <FontAwesomeIcon icon={faFilter} /></p>)}
      </div>
    </div>
  );
};

export default FilteredSearch;