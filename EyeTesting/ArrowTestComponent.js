// src/components/DuoTestComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DuoTestComponent.css';

const ArrowTestComponent = ({ onTestComplete }) => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState([]);
  const [currentEye, setCurrentEye] = useState('left');
  const [testCount, setTestCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleResponse = (isNormal) => {
    const updatedResponses = [...responses, { eye: currentEye, test: 'Duochrome', result: isNormal ? 'Normal' : 'Not Normal' }];
    setResponses(updatedResponses);

    if (testCount === 1 && currentEye === 'right') {
      setIsTransitioning(true);
      setTimeout(() => {
        onTestComplete(updatedResponses); // Pass responses to parent
      }, 500);
    } else if (testCount === 1) {
      setCurrentEye('right');
      setTestCount(0);
    } else {
      setTestCount(testCount + 1);
    }
  };

  return (
    <div className={`duochrome-test1 ${isTransitioning ? 'slide-left' : ''}`}>
      <div className="navbar">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
      </div>
      <div>
        <h1>Eye Screening - Test Your Vision</h1>
        <h2>Duochrome Test</h2>
        <p>The test should be done in a dark room.</p>
        <h3>COVER YOUR {currentEye.toUpperCase()} EYE</h3>
        <p>Is the letter E sharper in Red or Green or Both are Same?</p>
        <div className="test-area1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZgzm-5xQBBHASd9ahTUrC366O_ozpqvNbQ&s" alt="Duochrome Test" className="test-image1" />
        </div>
        <div className="test-buttons1">
          <button onClick={() => handleResponse(true)}>Green</button>
          <button onClick={() => handleResponse(false)}>Red</button>
          <button onClick={() => handleResponse(true)}>The Same</button>
        </div>
      </div>
    </div>
  );
};

export default ArrowTestComponent;
