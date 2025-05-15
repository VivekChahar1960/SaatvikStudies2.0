import React, { useState, useRef, useEffect } from 'react';
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
  FaSearch,
} from 'react-icons/fa';

const ncertClasses = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);
const seniorClasses = Array.from({ length: 6 }, (_, i) => `Class ${i + 7}`);

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMainDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
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

  const closeAllMenus = () => {
    closeMobileMenu();
    setOpenDropdown(null);
  };

  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      <div className="logo-container">
        <Link to="/" onClick={closeAllMenus}>
          <img src={Logo} alt="Saatvik Studies Logo" className="logo" />
        </Link>
      </div>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuVisible ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-links ${mobileMenuVisible ? 'active' : ''}`}>
        <Link className="nav-link home-link" to="/" onClick={closeAllMenus}>
          Home
        </Link>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('ncert')}>
            <FaBook className="nav-icon" /> NCERT Books
          </span>
          <div className={`dropdown-content ${openDropdown === 'ncert' ? 'active' : ''}`}>
            {ncertClasses.map((cls, i) => (
              <Link key={i} to={`/ncertbooks/class/${i + 1}`} onClick={closeAllMenus}>
                {cls}
              </Link>
            ))}
          </div>
        </div>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('notes')}>
            <FaStickyNote className="nav-icon" /> Chapterwise Notes
          </span>
          <div className={`dropdown-content ${openDropdown === 'notes' ? 'active' : ''}`}>
            {seniorClasses.map((cls, i) => (
              <Link key={i} to={`/chapterwisenotes/class/${i + 7}`} onClick={closeAllMenus}>
                {cls}
              </Link>
            ))}
          </div>
        </div>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('solutions')}>
            <FaCheckCircle className="nav-icon" /> Exercise Solutions
          </span>
          <div className={`dropdown-content ${openDropdown === 'solutions' ? 'active' : ''}`}>
            {seniorClasses.map((cls, i) => (
              <Link key={i} to={`/exercisesolutions/class/${i + 7}`} onClick={closeAllMenus}>
                {cls}
              </Link>
            ))}
          </div>
        </div>

        <div className="nav-item">
          <span className="nav-link" onClick={() => toggleMainDropdown('mocktest')}>
            <FaPencilAlt className="nav-icon" /> Mock Test
          </span>
          <div className={`dropdown-content ${openDropdown === 'mocktest' ? 'active' : ''}`}>
            {seniorClasses.map((cls, i) => (
              <Link key={i} to={`/mocktest/class/${i + 7}`} onClick={closeAllMenus}>
                {cls}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/search" className="nav-link search-icon-link" onClick={closeAllMenus}>
          <FaSearch className="nav-icon" />
        </Link>

        {user ? (
          <div className="loggedinProfile">
            <div className="user-info" onClick={toggleProfileDropdown}>
              <FaUserCircle className="user-icon" />
              <span className="user-name">{user.name}</span>
            </div>

            <div className={`dropdown-menu ${openDropdown === 'profile' ? 'active' : ''}`}>
              <Link to="/profile" className="dropdown-item" onClick={closeAllMenus}>
                Profile
              </Link>

              {/* Show Upload link only for selected phone numbers */}
              {user.phone && ['8700348696', '7303488931'].includes(user.phone) && (
                <Link to="/adminupload" className="dropdown-item" onClick={closeAllMenus}>
                  Upload
                </Link>
              )}

              <button
                className="dropdown-item logout-btn"
                onClick={() => {
                  handleLogout();
                  closeAllMenus();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-register-link">
            <button className="login-btn" onClick={closeAllMenus}>
              Login / Register
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
