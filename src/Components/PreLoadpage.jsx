import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import runningAnimation from "../assets/running.json";
import SS_logo from "../assets/SS_logo_loading.png";
import "./PreloadPage.css";

const PreloadPage = () => {
  const [progress, setProgress] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const requestRef = useRef();

  // Elegantly animate the progress bar
  const animateProgress = () => {
    setProgress((prev) => {
      if (prev >= 100) {
        cancelAnimationFrame(requestRef.current);
        return 100;
      }
      const next = prev + 0.6; // Slightly slower for a more graceful feel
      return next > 100 ? 100 : next;
    });
    requestRef.current = requestAnimationFrame(animateProgress);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Introduce a subtle delay before revealing the main content
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setLoadingDone(true), 450); // Increased delay
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (loadingDone) {
    return (
      <div className="loading_site-content">
        <h1 className="loading_main-title">Content Loaded Successfully!</h1>
      </div>
    );
  }

  return (
    <div className="loading_preload-container">
      <img
        src={SS_logo}
        alt="Saatvik Studies Logo"
        className="loading_logo"
      />

      <div className="loading_progress-bar-container">
        <div
          className="loading_progress-bar"
          style={{ width: `${progress}%` }}
        ></div>

        <div
          className="loading_runner-wrapper"
          style={{ left: `${progress}%` }}
        >
          <Lottie
            animationData={runningAnimation}
            loop={true}
            autoplay={true}
            style={{ height: 60, width: 60 }} // Slightly larger runner
          />
        </div>
      </div>

      <div className="loading_percentage-text">{Math.floor(progress)}%</div>
      <div className="loading_status-text">Loading application resources...</div>
    </div>
  );
};

export default PreloadPage;