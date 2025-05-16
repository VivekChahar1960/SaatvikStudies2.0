import React, { useState, useEffect } from 'react';
import './Mocktest.css';

const questions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi",
  },
  {
    id: 2,
    question: "What is 5 x 3?",
    options: ["8", "15", "10", "20"],
    answer: "15",
  },
  {
    id: 3,
    question: "HTML stands for?",
    options: ["Hyper Text Makeup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language",
  },
];

const Mocktest = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    if (!submitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, submitted]);

  const handleOptionChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) score++;
    });
    setScore(score);
    setSubmitted(true);
  };

  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="test-container">
      <h2>Mock Test</h2>
      <div className="timer">Time Left: {formatTime()}</div>

      {questions.map((q) => (
        <div key={q.id} className="question-box">
          <p className="question">{q.question}</p>
          {q.options.map((opt) => (
            <label key={opt} className="option">
              <input
                type="radio"
                name={`q${q.id}`}
                value={opt}
                disabled={submitted}
                checked={answers[q.id] === opt}
                onChange={() => handleOptionChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={submitted}
      >
        Submit
      </button>

      {submitted && (
        <div className="result">You scored {score} out of {questions.length}</div>
      )}
    </div>
  );
};

export default Mocktest;
