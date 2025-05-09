import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import HeroSection from './Components/HeroSection/HeroSection';
import SubjectPage from './Components/SubjectShow/SubjectPage';
import Profile from './Components/Profile/Profile';
import ProfilePage from './Components/Profile/Profile';

// Placeholder pages
const HomePage = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Welcome to Saatvik Studies</h1>
    <p>Study resources from Class 1 to 12.</p>
  </div>
);


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          // <HomePage />
          <HeroSection/>
          } />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/:section/class/:classId" element={<SubjectPage />} />
        {/* <Route path="/chapterwisenotes/class/:classId" element={<ClassPage />} />
        <Route path="/exercisesolutions/class/:classId" element={<ClassPage />} />
        <Route path="/mocktest/class/:classId" element={<ClassPage />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
