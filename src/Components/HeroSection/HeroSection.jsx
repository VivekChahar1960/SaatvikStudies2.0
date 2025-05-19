import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Ncert from "../../assets/books.png";
import Notes from "../../assets/notes.png";
import Solutions from "../../assets/solutions.png";
import Test from "../../assets/test.png";
import study_hero from "../../assets/study_hero.json";
import aboutUsImg from "../../assets/aboutUs.png";
import contactUsImg from "../../assets/contactUs.png";
import {
  FaArrowRight,
  FaBookOpen,
  FaPencilAlt,
  FaCheckCircle,
  FaRocket,
  FaPhoneAlt,
} from "react-icons/fa";

const features = [
  {
    img: Ncert,
    title: "NCERT Books",
    subtitle: "Explore a wide range of books",
    icon: FaBookOpen,
    link: "/books",
  },
  {
    img: Notes,
    title: "Chapterwise Notes",
    subtitle: "Detailed notes for every chapter",
    icon: FaPencilAlt,
    link: "/notes",
  },
  {
    img: Solutions,
    title: "Exercise Solutions",
    subtitle: "Step-by-step solutions to all exercises",
    icon: FaCheckCircle,
    link: "/solutions",
  },
  {
    img: Test,
    title: "Mock Tests",
    subtitle: "Evaluate your progress with mock tests",
    icon: FaRocket,
    link: "/tests",
  },
];

const HeroSection = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section-expanded">
      <div className="hero-container-expanded">
        <div className="hero-content-expanded">
          <div className="hero-text-expanded">
            <h1>
              Unlock Your Potential with <span>Saatvik Studies</span>
            </h1>
            <p className="hero-subtitle-expanded">
              The all-in-one platform for mastering your studies with NCERT
              resources, comprehensive notes, detailed solutions, and
              challenging mock tests.
            </p>
            <Link to="/aboutus">
              <button className="get-started-button-expanded">
                Explore Now <FaArrowRight className="button-icon" />
              </button>
            </Link>
          </div>
          <div className="hero-image-wrapper-expanded">
            <Player
              autoplay
              loop
              src={study_hero}
              className="hero-animation"
              speed={1}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        <div className="features-grid-container-expanded">
          <h2 className="features-heading-expanded">Our Key Features</h2>
          <div className="features-grid-expanded">
            {features.map((feature, index) => {
              const isMockTests =
                feature.title.toLowerCase().replace(/\s+/g, "") === "mocktests";

              const content = (
                <div className="feature-card-expanded" key={index}>
                  <div className="feature-icon-wrapper-expanded">
                    <feature.icon className="feature-icon-expanded" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                  <span className="feature-link-expanded">Learn More</span>
                </div>
              );

              return isMockTests ? (
                content
              ) : (
                <Link
                  to="/search"
                  state={{ type: feature.title.toLowerCase().replace(/\s+/g, "") }}
                  key={index}
                  className="feature-card-link-expanded"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="info-sections-container-expanded">
          <h2 className="info-heading-expanded">Learn More About Us</h2>
          <div className="info-sections-expanded">

            <div className="info-card-expanded">
              <div className="info-image-wrapper-expanded">
                <img
                  src={aboutUsImg}
                  alt="About Saatvik Study Station"
                  className="info-static-image"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="info-text-expanded">
                <h3>About Saatvik Study Station</h3>
                <p>
                  Discover our mission to empower students with quality
                  educational resources and personalized learning experiences.
                </p>
                <Link to={"/aboutus"} className="info-link-expanded">
                  Read Our Story <FaArrowRight />{" "}
                </Link>
              </div>
            </div>

            <div className="info-card-expanded">
              <div className="info-image-wrapper-expanded">
                <img
                  src={contactUsImg}
                  alt="Contact Saatvik Study Station"
                  className="info-static-image"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="info-text-expanded">
                <h3>Get in Touch</h3>
                <p>
                  Have questions or need assistance? Our dedicated support team
                  is here to help you on your learning journey.
                </p>
                <Link to={"/contactUs"} className="info-link-expanded">
                  Contact Us Today <FaPhoneAlt />{" "}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
