import React, { useEffect, useState } from "react";

const Loader = ({ logo, children }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500); // Delay before showing site
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Speed of progress
  }, []);

  if (isLoaded) return <>{children}</>;

  return (
    <div style={styles.loaderContainer}>
      <div style={styles.circleWrapper}>
        <svg width="150" height="150" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#ccc"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#00aaff"
            strokeWidth="6"
            fill="none"
            strokeDasharray={339.292}
            strokeDashoffset={339.292 - (progress / 100) * 339.292}
            transform="rotate(-90 60 60)"
            strokeLinecap="round"
          />
        </svg>
        <img src={logo} alt="Site Logo" style={styles.logo} />
        <div style={styles.percent}>{progress}%</div>
      </div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    flexDirection: "column",
  },
  circleWrapper: {
    position: "relative",
    width: 150,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover",
  },
  percent: {
    position: "absolute",
    bottom: -30,
    fontSize: 16,
    color: "#333",
  },
};

export default Loader;
