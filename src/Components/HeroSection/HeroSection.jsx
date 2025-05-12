import React from "react";
import HeroImg from "../../assets/HeroSectionImg.png";
import "./HeroSection.css";
import Ncert from "../../assets/books.png";
import Notes from "../../assets/notes.png";
import Solutions from "../../assets/solutions.png";
import Test from "../../assets/test.png";
import AboutUs from "../../assets/aboutUs.png";
import ContactUs from "../../assets/contactUs.png";
import { FaArrowRight, FaBookOpen, FaPencilAlt, FaCheckCircle, FaRocket, FaPhoneAlt } from 'react-icons/fa';

const features = [
  { img: Ncert, title: "NCERT Books", subtitle: "Explore a wide range of books", icon: FaBookOpen, link: "/books" },
  { img: Notes, title: "Chapterwise Notes", subtitle: "Detailed notes for every chapter", icon: FaPencilAlt, link: "/notes" },
  { img: Solutions, title: "Exercise Solutions", subtitle: "Step-by-step solutions to all exercises", icon: FaCheckCircle, link: "/solutions" },
  { img: Test, title: "Mock Tests", subtitle: "Evaluate your progress with mock tests", icon: FaRocket, link: "/tests" },
];

const HeroSection = () => {
  return (
    <section className="hero-section-expanded"> {/* Updated class name */}
      <div className="hero-container-expanded"> {/* Updated class name */}
        <div className="hero-content-expanded"> {/* Updated class name */}
          <div className="hero-text-expanded"> {/* Updated class name */}
            <h1>
              Unlock Your Potential with <span>StudyHub</span>
            </h1>
            <p className="hero-subtitle-expanded"> {/* Updated class name */}
              The all-in-one platform for mastering your studies with NCERT resources, comprehensive notes, detailed solutions, and challenging mock tests.
            </p>
            <button className="get-started-button-expanded"> {/* Updated class name */}
              Explore Now <FaArrowRight className="button-icon" />
            </button>
          </div>
          <div className="hero-image-wrapper-expanded"> {/* Updated class name */}
            <img src={HeroImg} alt="Hero Illustration" className="hero-main-image-expanded" /> {/* Updated class name */}
          </div>
        </div>

        <div className="features-grid-container-expanded"> {/* Updated class name */}
          <h2 className="features-heading-expanded">Our Key Features</h2> {/* Updated class name */}
          <div className="features-grid-expanded"> {/* Updated class name */}
            {features.map((feature, index) => (
              <a href={feature.link} key={index} className="feature-card-link-expanded"> {/* Updated class name */}
                <div className="feature-card-expanded"> {/* Updated class name */}
                  <div className="feature-icon-wrapper-expanded"> {/* Updated class name */}
                    <feature.icon className="feature-icon-expanded" /> {/* Updated class name */}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                  <span className="feature-link-expanded">Learn More</span> {/* Updated class name */}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="info-sections-container-expanded"> {/* Updated class name */}
          <h2 className="info-heading-expanded">Learn More About Us</h2> {/* Updated class name */}
          <div className="info-sections-expanded"> {/* Updated class name */}
            <div className="info-card-expanded"> {/* Updated class name */}
              <div className="info-image-wrapper-expanded"> {/* Updated class name */}
                <img src={AboutUs} alt="About Us Illustration" className="info-image-expanded" /> {/* Updated class name */}
              </div>
              <div className="info-text-expanded"> {/* Updated class name */}
                <h3>About Saatvik Study Station</h3>
                <p>
                  Discover our mission to empower students with quality educational resources and personalized learning experiences.
                </p>
                <a href="#about" className="info-link-expanded">Read Our Story <FaArrowRight /></a> {/* Updated class name */}
              </div>
            </div>
            <div className="info-card-expanded"> {/* Updated class name */}
              <div className="info-image-wrapper-expanded"> {/* Updated class name */}
                <img src={ContactUs} alt="Contact Us Illustration" className="info-image-expanded" /> {/* Updated class name */}
              </div>
              <div className="info-text-expanded"> {/* Updated class name */}
                <h3>Get in Touch</h3>
                <p>
                  Have questions or need assistance? Our dedicated support team is here to help you on your learning journey.
                </p>
                <a href="#contact" className="info-link-expanded">Contact Us Today <FaPhoneAlt /></a> {/* Updated class name */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;