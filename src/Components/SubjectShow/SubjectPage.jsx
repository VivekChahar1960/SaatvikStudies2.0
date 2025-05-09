import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SubjectPage.css'
const SubjectPage = () => {
  const { section, classId } = useParams();
  const [loading, setLoading] = useState(true);

  // Simulate a delay of 1 second before showing the page content
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [section, classId]);
  

  // Spinner JSX
  console.log(loading);
  return (
    <div style={{ padding: '2rem' }}>
      {loading ? (
        <div className="spinner-container">
        <div className="spinner"></div>
      </div> // Show spinner while loading
      ) : (
        <>
          <h2>{section.replace(/([A-Z])/g, ' $1').toUpperCase()}</h2>
          <p>You're viewing content for <strong>Class {classId}</strong> in <strong>{section}</strong>.</p>
        </>
      )}
    </div>
  );
};

export default SubjectPage;
