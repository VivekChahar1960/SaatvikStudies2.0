import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get, child } from 'firebase/database';
import './SubjectPage.css';

const SubjectPage = () => {
  const { section, classId } = useParams();
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    // Reset state when section or class changes
    setSelectedSubject(null);
    setChapters([]);

    const fetchSubjects = async () => {
      setLoading(true);
      const db = getDatabase();
      const dbRef = ref(db);

      try {
        const snapshot = await get(child(dbRef, `NcertBooks/class ${classId}`));
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSubjects(Object.keys(data));
        } else {
          setSubjects([]);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setSubjects([]);
      }
      setLoading(false);
    };

    fetchSubjects();
  }, [classId, section]);

  const handleSubjectClick = async (subject) => {
    setSelectedSubject(subject);
    setLoading(true);
    setChapters([]);

    const db = getDatabase();
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, `NcertBooks/class ${classId}/${subject}`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formatted = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));

        formatted.sort((a, b) => {
          const chapterA = parseInt(a.id.match(/ch(\d+)/)?.[1] || '0', 10);
          const chapterB = parseInt(b.id.match(/ch(\d+)/)?.[1] || '0', 10);
          return chapterA - chapterB;
        });

        setChapters(formatted);
      } else {
        setChapters([]);
      }
    } catch (error) {
      console.error("Error fetching chapters:", error);
      setChapters([]);
    }

    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      <div className="header">
        <h1>{section.toUpperCase()} - Class {classId}</h1>
        {selectedSubject && (
          <button className="back-btn" onClick={() => setSelectedSubject(null)}>⬅ Back to Subjects</button>
        )}
      </div>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : !selectedSubject ? (
        <div className="subject-grid">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-card" onClick={() => handleSubjectClick(subject)}>
              <h3>{subject.toUpperCase()}</h3>
              <p>Click to explore chapters</p>
            </div>
          ))}
          {subjects.length === 0 && <p className="no-data">No subjects found.</p>}
        </div>
      ) : (
        <div className="chapters-panel">
          <h2>{selectedSubject.toUpperCase()}</h2>
          {chapters.length === 0 ? (
            <p className="no-data">No chapters available.</p>
          ) : (
            <ul className="chapter-list">
              {chapters.map((chapter, index) => (
                <li key={index}>
                  <a href={chapter.fileUrl} target="_blank" rel="noopener noreferrer">
                    📖 {chapter.chapterName || `Chapter ${index + 1}`}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SubjectPage;
