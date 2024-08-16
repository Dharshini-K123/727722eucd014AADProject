// src/components/InstructionComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/InstructionComponent.css';

const InstructionComponent = ({ onNext }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextClick = () => {
    setIsTransitioning(true);
    // Delay the navigation until the animation ends
    setTimeout(() => {
      onNext(); // Call the function to navigate to the next page
    }, 1000); // Match this duration with the animation time
  };

  return (
    <div className={`instruction-container ${isTransitioning ? 'slide-left' : ''}`}>
      <div className="navbar">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
      </div>
      <div className="instruction-content">
        <h1>Eye Test Instructions</h1>
        <p>Please follow the instructions carefully.</p>
        <ol>
          <li>Close your left eye and read the letters displayed on the screen.</li>
          <li>Next, open both eyes and identify the direction of the letter "E" and arrows.</li>
          <li>Click "Next" to proceed to the test.</li>
        </ol>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default InstructionComponent;
