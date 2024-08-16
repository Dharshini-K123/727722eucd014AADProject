import React, { useState } from 'react';
import '../styles/EyeStrainQuiz.css';

const EyeStrainQuiz = () => {
  const questions = [
    { question: "How long can you work on your digital device without any discomfort?", options: ["More than 3 hrs", "Up to 2 hrs", "Up to 1 hr", "Up to 30 min", "Up to 15 min"] },
    { question: "Do you experience headaches after using digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do your eyes feel dry after using digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you experience blurry vision while using digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you have difficulty focusing on the screen?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you experience neck or shoulder pain while using digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you experience sensitivity to light while using digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you experience double vision while using digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you experience difficulty reading text on digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] },
    { question: "Do you need to take frequent breaks while using digital devices?", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        calculateResult(newAnswers);
      }
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const calculateResult = (answers) => {
    const score = answers.filter(answer => answer !== "Never" && answer !== "Rarely").length;
    const hasEyeStrain = score >= 5;
    setResult(hasEyeStrain ? "You may have digital eye strain." : "You may not have digital eye strain.");
  };

  return (
    <div className="quiz-container">
      {result === null ? (
        <>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button 
                key={index} 
                className={`option-button ${selectedOption === option ? 'selected' : ''}`} 
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="next-button" onClick={handleNextClick}>Next</button>
        </>
      ) : (
        <div className="result">
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default EyeStrainQuiz;
