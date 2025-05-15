import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
// import ProtectedRoute from './Components/ProtectedRoute';
import HeroSection from './Components/HeroSection/HeroSection';
import SubjectPage from './Components/SubjectShow/SubjectPage';
import Profile from './Components/Profile/Profile';
import ProfilePage from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import UploadNcertBooksToRTDB from './UploadNcertBooksToRTDB';
import FilteredSearch from './Components/FilteredSearch';



function App() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("scrollProgress").style.width = scrollPercent + "%";
  });
  
  return (
    <div className="app-wrapper">
      <div id="scrollProgress"></div>
    <Router>
      <Navbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={
          <HeroSection/>
          } />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/:section/class/:classId" element={<SubjectPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/upload" element={<UploadNcertBooksToRTDB/>} />
        <Route path="/search" element={<FilteredSearch/>} />

      </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
