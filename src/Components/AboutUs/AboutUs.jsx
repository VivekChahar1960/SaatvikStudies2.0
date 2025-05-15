import React from "react";
import "./AboutUs.css";
import AboutUsImg from "../../assets/aboutUsImg.png";
import websiteImg from "../../assets/websiteImg.png";
import mic from "../../assets/mic.png";
import degree from "../../assets/degree.png";
import trophy from "../../assets/trophy.png";
import book from "../../assets/book.png";
import people from "../../assets/people.png";
import notes from "../../assets/notes 2.png";
import list from "../../assets/list.png";
import heir from "../../assets/heirarchy.png";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  setTimeout(() => {
    scrollToTop();
  }, 10);
  return (
    <div>
      <div className="main-char">
        <p className="heading">WHY SAATVIK STUDY STATION</p>
        <div className="characteristic">
          <div className="card">
            <img src={mic} alt="char img"></img>
            <p>
              This Institute is exclusive for your Fundamental Strengthening
            </p>
          </div>
          <div className="card">
            <img src={degree} alt="char img"></img>
            <p>Faculties available are Highly Qualified</p>
          </div>
          <div className="card">
            <img src={trophy} alt="char img"></img>
            <p>Will stand behind you to make you Achieve your Goals</p>
          </div>
          <div className="card">
            <img src={list} alt="char img"></img>
            <p>Step by Step clarification of Topics</p>
          </div>
          <div className="card">
            <img src={book} alt="char img"></img>
            <p>We will provide the best content available about the topics</p>
          </div>
          <div className="card">
            <img src={heir} alt="char img"></img>
            <p>Seperate Teams of Experts to provide the Best for you</p>
          </div>
          <div className="card">
            <img src={people} alt="char img"></img>
            <p>Best Guidance and Problem Solving Sessions</p>
          </div>
          <div className="card">
            <img src={notes} alt="char img"></img>
            <p>
              Our Question Bank and Mock Test contains all Previous Year
              Questions
            </p>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="Aboutus" id="AboutUS">
          <img src="https://raw.githubusercontent.com/VivekChahar1960/SSS_Data/main/Aboutus%20Image.png" alt="about us img" className={`aboutusimg`} />
          <div className={`aboutMain`}>
            <p className="mainheadingaboutus">
              <b>SAATVIK STUDY STATION</b>
            </p>
            Saatvik Study Station is the best coaching for unlocking students
            potential and maximizing their growth. Our main focus is to let each
            student discover their True Self , Brake Barriers and design their
            Extraordinary life.
            <br />
            All class students can join us via Online & Offline mode of Coaching
            . Study Materials available are designed under the Guidance of
            Experts.
            <br />
            <div className="notes">
              A Good Coaching can change the Game but Saatvik Study Station can
              change your Life.
            </div>
          </div>
        </div>
        <div className="Aboutweb" id="Aboutweb">
          <div className={`aboutMainWeb`}>
            <p className="mainheadingaboutweb">
              <b>SAATVIK STUDIES WEBSITE</b>
            </p>
            Saatvik Studies is an online platform that provides information or
            contents on topics realted to education . It contains :-
            <br />• Latest NCERT chapterwise PDFs
            <br />• All classes chapterwise notes
            <br />• Exercise Solutions
            <br />• Question Banks
            <br />• Previous year Questions
            <br />• Mock Tests
            <br />
            Saatvik Studies webiste contains a Query section in which we
            guarantee to solve your query within 5-6 hours.
            <div className="notes">
              JOIN US in the journey to empower individuals to reach their full
              potentials & make a positive impact on our society.
            </div>
          </div>
          <img
            src={websiteImg}
            alt="about webiste img"
            className={`aboutWebimg`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
