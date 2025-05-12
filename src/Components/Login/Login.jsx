import React, { useState, useEffect, useRef } from "react";
import { auth, googleProvider } from "../../firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";
import { useNotification } from "../../Context/NotificationContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import "./Login.css"; // Assuming you have some basic styling

const Login = () => {
  const { showNotification } = useNotification();
  const { login } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    name: "",
    email: "",
    class: "",
    school: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const db = getDatabase();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCustomSelect = (value, label) => {
    setFormData((prev) => ({
      ...prev,
      class: value,
    }));
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const clearForm = () => {
    setFormData({
      phone: "",
      password: "",
      name: "",
      email: "",
      class: "",
      school: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { phone, password } = formData;
    const userRef = ref(db, `users/${phone}`);

    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          const fullUser = {
            name: userData.name,
            email: userData.email,
            phone,
          };
          login(fullUser);
          showNotification("Login successful!");
          clearForm();
          navigate(from, { replace: true });
        } else {
          showNotification("Incorrect password.");
        }
      } else {
        showNotification("User not found.");
      }
    } catch (error) {
      console.error(error);
      showNotification("Error logging in.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { phone, password, name, email, class: userClass, school } = formData;

    if (!name || !email || !userClass || !school || !phone || !password) {
      showNotification("Please fill all the fields.");
      return;
    }

    const userRef = ref(db, `users/${phone}`);

    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        showNotification("User already exists.");
      } else {
        await set(userRef, {
          name,
          email,
          class: userClass,
          school,
          password,
        });
        showNotification("Signup successful! You can now login.");
        clearForm();
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error);
      showNotification("Error during signup.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="auth-container">
      <form
        onSubmit={isLogin ? handleLogin : handleSignup}
        className="auth-form"
      >
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="custom-select-wrapper" ref={dropdownRef}>
              <div className="custom-select-trigger" onClick={toggleDropdown}>
                <span>{formData.class || "Select Class"}</span>
                <div className={`arrow ${isDropdownOpen ? "open" : ""}`}></div>
              </div>
              <div className={`custom-options ${isDropdownOpen ? "open" : ""}`}>
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i + 1}
                    onClick={() => handleCustomSelect(i + 1, `Class ${i + 1}`)}
                    className={`custom-option ${
                      formData.class === String(i + 1) ? "selected" : ""
                    }`}
                    data-value={i + 1}
                  >
                    Class {i + 1}
                  </div>
                ))}
              </div>
              <input
                type="hidden"
                name="class"
                value={formData.class}
              />
            </div>

            <input
              type="text"
              name="school"
              placeholder="School"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </>
        )}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>

        <p>
          {isLogin ? "Not registered?" : "Already have an account?"}{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;