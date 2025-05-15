import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { FaFileUpload, FaBookOpen, FaPencilAlt, FaCheckCircle, FaTimesCircle, FaCloudUploadAlt } from "react-icons/fa";
import "./AdminUploader.css"; // Import the CSS file

const AdminUploader = () => {
  const db = getDatabase();

  const [file, setFile] = useState(null);
  const [classNum, setClassNum] = useState("1");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [type, setType] = useState("ncertbooks"); // or chapterwisenotes
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const githubToken = import.meta.env.REACT_APP_GITHUB_TOKEN;  // development use only
  const githubUser = "vivekchahar1960";
  const githubRepo = "SSS_Data";

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "classNum":
        setClassNum(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "chapter":
        setChapter(value);
        break;
      case "chapterName":
        setChapterName(value);
        break;
      default:
        break;
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !subject || !chapter || !chapterName || !classNum) {
      setUploadError("⚠️ Please fill in all fields and select a file.");
      setTimeout(() => setUploadError(""), 3000);
      return;
    }

    setUploading(true);
    setUploadSuccess(false);
    setUploadError("");

    const fileName = file.name;
    const pathType = type === "ncertbooks" ? "books" : "notes";
    const filePath = `class ${classNum}/${pathType}/${subject}/${fileName}`;

    try {
      const fileContent = await file.text();
      const contentEncoded = btoa(unescape(encodeURIComponent(fileContent)));

      const githubRes = await fetch(
        `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${filePath}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${githubToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Upload ${fileName}`,
            content: contentEncoded,
          }),
        }
      );

      if (!githubRes.ok) {
        const errorData = await githubRes.json();
        console.error("❌ GitHub Upload Failed:", errorData);
        setUploadError(`❌ GitHub upload failed: ${errorData.message || githubRes.statusText}`);
        setUploading(false);
        return;
      }

      const resData = await githubRes.json();

      const fileUrl = resData.content.download_url
        .replace("https://github.com", "https://raw.githubusercontent.com")
        .replace("/blob/", "/");

      const metadata = {
        chapterName,
        chapterNumber: chapter,
        subject,
        class: classNum,
        fileUrl,
      };

      const firebasePath = `${type}/class ${classNum}/${subject}/ch${chapter}`;
      await set(ref(db, firebasePath), metadata);

      setUploadSuccess(true);
      setUploading(false);
      // Clear form after successful upload
      setFile(null);
      setClassNum("1");
      setSubject("");
      setChapter("");
      setChapterName("");
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (err) {
      console.error("❌ Upload Failed:", err);
      setUploadError(`❌ Upload failed: ${err.message}`);
      setUploading(false);
    }
  };

  return (
    <div className="admin-uploader-container">
      <h2 className="uploader-heading">
        <FaCloudUploadAlt className="heading-icon" /> Admin File Uploader
      </h2>

      <div className="input-group">
        <label htmlFor="file" className="input-label">
          <FaFileUpload className="label-icon" /> Select File (PDF):
        </label>
        <input
          type="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="input-field input-file"
        />
      </div>

      <div className="input-group">
        <label htmlFor="classNum" className="input-label">
          Class:
        </label>
        <input
          type="number"
          id="classNum"
          placeholder="e.g., 1"
          value={classNum}
          onChange={handleInputChange}
          name="classNum"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label htmlFor="subject" className="input-label">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          placeholder="e.g., Hindi"
          value={subject}
          onChange={handleInputChange}
          name="subject"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label htmlFor="chapter" className="input-label">
          Chapter Number:
        </label>
        <input
          type="number"
          id="chapter"
          placeholder="e.g., 1"
          value={chapter}
          onChange={handleInputChange}
          name="chapter"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label htmlFor="chapterName" className="input-label">
          Chapter Name:
        </label>
        <input
          type="text"
          id="chapterName"
          placeholder="e.g.,मेरी किताब"
          value={chapterName}
          onChange={handleInputChange}
          name="chapterName"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label htmlFor="type" className="input-label">
          Type:
        </label>
        <select
          id="type"
          value={type}
          onChange={handleTypeChange}
          className="input-field input-select"
        >
          <option value="ncertbooks">
            NCERT Books
          </option>
          <option value="chapterwisenotes">
            Chapterwise Notes
          </option>
        </select>
      </div>

      <button onClick={handleUpload} className="upload-button" disabled={uploading}>
        {uploading ? (
          <div className="loader"></div>
        ) : (
          <>
            <FaCloudUploadAlt className="button-icon" /> Upload & Save Metadata
          </>
        )}
      </button>

      {uploadSuccess && (
        <div className="upload-status success">
          <FaCheckCircle className="status-icon" /> Upload successful!
        </div>
      )}

      {uploadError && (
        <div className="upload-status error">
          <FaTimesCircle className="status-icon" /> {uploadError}
        </div>
      )}
    </div>
  );
};

export default AdminUploader;
