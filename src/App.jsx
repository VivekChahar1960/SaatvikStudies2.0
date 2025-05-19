import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import HeroSection from './Components/HeroSection/HeroSection';
import SubjectPage from './Components/SubjectShow/SubjectPage';
import ProfilePage from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import UploadNcertBooksToRTDB from './UploadNcertBooksToRTDB';
import FilteredSearch from './Components/FilteredSearch';
import AdminUploader from './Components/AdminUpload';
import PreLoadPage from './Components/PreLoadpage.jsx';
import PreloadPage from './Components/PreLoadpage.jsx';
import AdminEditor from './Components/AdminEditor.jsx';

function App() {
  const allowedPhones = ['8700348696', '7303488931'];
  const phone = localStorage.getItem('phone');

  return (
    <PreloadPage>
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:section/class/:classId" element={<SubjectPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/upload" element={<UploadNcertBooksToRTDB />} />
            <Route path="/search" element={<FilteredSearch />} />
            {/* <Route path="/load" element={<PreLoadPage />} /> */}

            {allowedPhones.includes(phone) && (
              <Route path="/adminupload" element={<AdminUploader />} />
            )}
            {allowedPhones.includes(phone) && (
              <Route path="/admineditor" element={<AdminEditor />} />
            )}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    </PreloadPage>
  );
}

export default App;
