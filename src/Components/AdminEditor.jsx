import React, { useState, useEffect } from "react";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import "./AdminEditor.css";

const AdminEditor = () => {
  const [type, setType] = useState("ncertbooks");
  const [classNum, setClassNum] = useState("1");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [subjectsList, setSubjectsList] = useState([]);
  const [chaptersList, setChaptersList] = useState([]);
  const [metadata, setMetadata] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newMetadata, setNewMetadata] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  const db = getDatabase();
  const octokit = import.meta.env.VITE_APP_GITHUB_TOKEN;
  const GITHUB_REPO = "SSS_Data"; // 🔁 Replace
  const GITHUB_OWNER = "VivekChahar1960 "; // 🔁 Replace

  const getFirebasePath = (cls, subj, chap) =>
    `${type}/class ${cls}/${subj}/ch${chap}`;

  const getGithubFolder = (type) => {
    if (type === "ncertbooks") return "book";
    if (type === "exercisesolutions") return "exercisesolution";
    return "chapterwisenotes";
  };

  const getGithubPath = (cls, subj, chap) =>
    `class ${cls}/${getGithubFolder(type)}/${subj}-ch${chap}.pdf`;

  useEffect(() => {
    const fetchSubjects = async () => {
      const path = `${type}/class ${classNum}`;
      const snap = await get(ref(db, path));
      setSubjectsList(snap.exists() ? Object.keys(snap.val()) : []);
    };
    fetchSubjects();
    setSubject("");
    setChaptersList([]);
    setMetadata(null);
  }, [classNum, type]);

  useEffect(() => {
    if (!subject) return;
    const path = `${type}/class ${classNum}/${subject}`;
    const fetchChapters = async () => {
      const snap = await get(ref(db, path));
      setChaptersList(snap.exists() ? Object.keys(snap.val()).map(k => k.replace("ch", "")) : []);
    };
    fetchChapters();
    setMetadata(null);
  }, [subject]);

  const fetchMetadata = async () => {
    const path = getFirebasePath(classNum, subject, chapter);
    const snap = await get(ref(db, path));
    if (snap.exists()) {
      setMetadata(snap.val());
      setNewMetadata(snap.val());
      setMessage("✅ Metadata loaded.");
    } else {
      setMessage("❌ No data found.");
    }
  };

  const handleMetadataChange = (e) => {
    const { name, value } = e.target;
    setNewMetadata({ ...newMetadata, [name]: value });
  };

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const uploadToGitHub = async (cls, subj, chap) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        const content = reader.result.split(",")[1]; // base64
        const githubFilePath = getGithubPath(cls, subj, chap);

        try {
          let sha = null;
          try {
            const { data } = await octokit.repos.getContent({
              owner: GITHUB_OWNER,
              repo: GITHUB_REPO,
              path: githubFilePath,
            });
            sha = data.sha;
          } catch {}

          const res = await octokit.repos.createOrUpdateFileContents({
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            path: githubFilePath,
            message: `Update ${subj} ch${chap}`,
            content,
            sha,
          });

          resolve(res.data.content.download_url);
        } catch (err) {
          reject("❌ GitHub upload failed.");
        }
      };
      reader.readAsDataURL(selectedFile);
    });
  };

  const saveMetadata = async () => {
    try {
      const oldPath = getFirebasePath(classNum, subject, chapter);
      const { class: newClass, subject: newSubject, chapterNumber } = newMetadata;
      const newPath = getFirebasePath(newClass, newSubject, chapterNumber);

      // Upload file if selected
      let newFileUrl = metadata.fileUrl;
      if (selectedFile) {
        newFileUrl = await uploadToGitHub(newClass, newSubject, chapterNumber);
      }

      const updatedData = {
        ...newMetadata,
        fileUrl: newFileUrl,
      };

      await set(ref(db, newPath), updatedData);
      if (newPath !== oldPath) await remove(ref(db, oldPath));

      setMetadata(updatedData);
      setEditMode(false);
      setMessage("✅ Metadata saved and file updated.");
    } catch (err) {
      setMessage("❌ Failed to save changes.");
      console.error(err);
    }
  };

  return (
    <div className="admin-viewer">
      <h2>🛠️ Admin Metadata Editor</h2>

      <div className="input-row">
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="ncertbooks">NCERT Books</option>
          <option value="chapterwisenotes">Chapterwise Notes</option>
          <option value="exercisesolutions">Exercise Solutions</option>
        </select>
      </div>

      <div className="input-row">
        <label>Class:</label>
        <input type="number" value={classNum} onChange={(e) => setClassNum(e.target.value)} />
      </div>

      <div className="input-row">
        <label>Subject:</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">-- Select --</option>
          {subjectsList.map((subj) => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>
      </div>

      <div className="input-row">
        <label>Chapter:</label>
        <select value={chapter} onChange={(e) => setChapter(e.target.value)}>
          <option value="">-- Select --</option>
          {chaptersList.map((ch) => (
            <option key={ch} value={ch}>{ch}</option>
          ))}
        </select>
      </div>

      <button onClick={fetchMetadata}>Fetch Metadata</button>
      {message && <p className="message">{message}</p>}

      {metadata && (
        <div className="metadata-section">
          <h3>Metadata</h3>
          {!editMode ? (
            <>
              <p><strong>Class:</strong> {metadata.class}</p>
              <p><strong>Subject:</strong> {metadata.subject}</p>
              <p><strong>Chapter No:</strong> {metadata.chapterNumber}</p>
              <p><strong>Chapter Name:</strong> {metadata.chapterName}</p>
              <p><strong>File URL:</strong> <a href={metadata.fileUrl} target="_blank" rel="noreferrer">Open</a></p>
              <button onClick={() => setEditMode(true)}>Edit</button>
            </>
          ) : (
            <>
              <div className="input-row">
                <label>Class:</label>
                <input name="class" value={newMetadata.class || ""} onChange={handleMetadataChange} />
              </div>

              <div className="input-row">
                <label>Subject:</label>
                <input name="subject" value={newMetadata.subject || ""} onChange={handleMetadataChange} />
              </div>

              <div className="input-row">
                <label>Chapter No:</label>
                <input name="chapterNumber" value={newMetadata.chapterNumber || ""} onChange={handleMetadataChange} />
              </div>

              <div className="input-row">
                <label>Chapter Name:</label>
                <input name="chapterName" value={newMetadata.chapterName || ""} onChange={handleMetadataChange} />
              </div>

              <div className="input-row">
                <label>Replace PDF:</label>
                <input type="file" accept="application/pdf" onChange={handleFileChange} />
              </div>

              <button onClick={saveMetadata}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminEditor;
