import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/SaatvikStudiesLogo.png';
import { useUser } from '../../Context/UserContext';
import {
  FaUserCircle,
  FaBars,
  FaTimes,
  FaBook,
  FaStickyNote,
  FaCheckCircle,
  FaPencilAlt,
} from 'react-icons/fa';

const ncertClasses = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);
const seniorClasses = Array.from({ length: 6 }, (_, i) => `Class ${i + 7}`);

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(null); // Controls all dropdowns including profile
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Create refs for the navbar and dropdowns
  const navLinksRef = useRef(null);
  const ncertDropdownRef = useRef(null);
  const notesDropdownRef = useRef(null);
  const solutionsDropdownRef = useRef(null);
  const mocktestDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const loggedinProfileRef = useRef(null);

  const toggleMainDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    setOpenDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
    setOpenDropdown(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleProfileDropdown = () => {
    setOpenDropdown((prev) => (prev === 'profile' ? null : 'profile'));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the mobile menu is visible
      if (mobileMenuVisible && navLinksRef.current && !navLinksRef.current.contains(event.target) && !event.target.classList.contains('mobile-menu-icon')) {
        setMobileMenuVisible(false);
      }

      // Check for open main dropdowns
      if (openDropdown === 'ncert' && ncertDropdownRef.current && !ncertDropdownRef.current.contains(event.target) && event.target !== document.querySelector('.nav-link:nth-child(2) > span')) {
        setOpenDropdown(null);
      }
      if (openDropdown === 'notes' && notesDropdownRef.current && !notesDropdownRef.current.contains(event.target) && event.target !== document.querySelector('.nav-link:nth-child(3) > span')) {
        setOpenDropdown(null);
      }
      if (openDropdown === 'solutions' && solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target) && event.target !== document.querySelector('.nav-link:nth-child(4) > span')) {
        setOpenDropdown(null);
      }
      if (openDropdown === 'mocktest' && mocktestDropdownRef.current && !mocktestDropdownRef.current.contains(event.target) && event.target !== document.querySelector('.nav-link:nth-child(5) > span')) {
        setOpenDropdown(null);
      }

      // Check for open profile dropdown
      if (openDropdown === 'profile' && loggedinProfileRef.current && !loggedinProfileRef.current.contains(event.target) && !event.target.classList.contains('user-info')) {
        setOpenDropdown(null);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuVisible, openDropdown]); // Re-run effect when visibility or open dropdown changes

  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={Logo} alt="Saatvik Studies Logo" className="logo" />
        </Link>
      </div>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuVisible ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-links ${mobileMenuVisible ? 'active' : ''}`} ref={navLinksRef}>
        <Link className="nav-link home-link" to="/" onClick={closeMobileMenu}>Home</Link>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('ncert')}>
            <FaBook className="nav-icon" /> NCERT Books
          </span>
          <div className={`dropdown-content ${openDropdown === 'ncert' ? 'active' : ''}`} ref={ncertDropdownRef}>
            {ncertClasses.map((cls, i) => (
              <Link key={i} to={`/ncertbooks/class/${i + 1}`} onClick={closeMobileMenu}>{cls}</Link>
            ))}
          </div>
        </div>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('notes')}>
            <FaStickyNote className="nav-icon" /> Chapterwise Notes
          </span>
          <div className={`dropdown-content ${openDropdown === 'notes' ? 'active' : ''}`} ref={notesDropdownRef}>
            {seniorClasses.map((cls, i) => (
              <Link key={i} to={`/chapterwisenotes/class/${i + 7}`} onClick={closeMobileMenu}>{cls}</Link>
            ))}
          </div>
        </div>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('solutions')}>
            <FaCheckCircle className="nav-icon" /> Exercise Solutions
          </span>
          <div className={`dropdown-content ${openDropdown === 'solutions' ? 'active' : ''}`} ref={solutionsDropdownRef}>
            {seniorClasses.map((cls, i) => (
              <Link key={i} to={`/exercisesolutions/class/${i + 7}`} onClick={closeMobileMenu}>{cls}</Link>
            ))}
          </div>
        </div>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('mocktest')}>
            <FaPencilAlt className="nav-icon" /> Mock Test
          </span>
          <div className={`dropdown-content ${openDropdown === 'mocktest' ? 'active' : ''}`} ref={mocktestDropdownRef}>
            {seniorClasses.map((cls, i) => (
              <Link key={i} to={`/mocktest/class/${i + 7}`} onClick={closeMobileMenu}>{cls}</Link>
            ))}
          </div>
        </div>

        {user ? (
          <div className="loggedinProfile" ref={loggedinProfileRef}>
            <div className="user-info" onClick={toggleProfileDropdown}>
              <FaUserCircle className="user-icon" />
              <span className="user-name">{user.name}</span>
            </div>

            <div className={`dropdown-menu ${openDropdown === 'profile' ? 'active' : ''}`} ref={profileDropdownRef}>
              <Link to="/profile" className="dropdown-item" onClick={closeMobileMenu}>Profile</Link>
              <button className="dropdown-item logout-btn" onClick={() => { handleLogout(); closeMobileMenu(); }}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-register-link">
            <button className="login-btn" onClick={closeMobileMenu}>
              Login / Register
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;