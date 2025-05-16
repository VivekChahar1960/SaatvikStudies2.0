import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/Loader_Lottie.json";

// Helper to set a short-lived cookie (e.g., 5 minutes)
const setCookie = (name, value, minutes) => {
  const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const PreloadPage = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = getCookie("hasVisited");

    // Always show loader, but skip it if cookie exists
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
          setCookie("hasVisited", "true", 5); // valid for 5 minutes
        }, 500); // fade out duration
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // Already visited recently
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Lottie
          animationData={loaderAnimation}
          loop
          autoplay
          style={{ height: 200, width: 200 }}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadPage;
