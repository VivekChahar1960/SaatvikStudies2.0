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



function App() {
  return (
    <div className="app-wrapper">
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
      </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
