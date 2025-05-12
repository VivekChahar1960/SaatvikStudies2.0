import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import HeroSection from './Components/HeroSection/HeroSection';
import SubjectPage from './Components/SubjectShow/SubjectPage';
import Profile from './Components/Profile/Profile';
import ProfilePage from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';

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
          <HeroSection/>
          } />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/:section/class/:classId" element={<SubjectPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
