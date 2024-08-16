// src/components/NearVisionTest.js
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NearVision.css';

const NearVisionTest = ({ onTestComplete }) => {
  const navigate = useNavigate();
  const [currentEye, setCurrentEye] = useState('left');
  const [responses, setResponses] = useState([]);
  const [testCount, setTestCount] = useState(0);
  const sizes = [11, 21, 13, 41, 15, 16, 17, 28, 9];
  const [currentSize, setCurrentSize] = useState(1);

  const getNextTest = useCallback(() => {
    const newSize = sizes[Math.floor(Math.random() * sizes.length)];
    setCurrentSize(newSize);
  }, [sizes]);

  useEffect(() => {
    getNextTest();
  }, [testCount, currentEye, getNextTest]);

  const handleResponse = (canSee) => {
    const updatedResponses = [...responses, { eye: currentEye, test: 'Near Vision', size: `N${currentSize}`, canSee }];
    setResponses(updatedResponses);

    if (testCount === sizes.length - 1) {
      if (currentEye === 'right') {
        onTestComplete(updatedResponses); // Pass responses to parent
      } else {
        setCurrentEye('right');
        setTestCount(0);
      }
    } else {
      setTestCount(testCount + 1);
    }
  };

  return (
    <div className="near-vision-test">
      <div className="navbar">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
      </div>
      <div>
        <h1>Near Vision Test</h1>
        <p>Select the button if you can clearly read the text at each size.</p>
        <h2>COVER YOUR {currentEye.toUpperCase()} EYE</h2>
        <div className="test-area">
          <div className="text-line" style={{ fontSize: `${currentSize}px` }}>
            !!!Hello welcome to test your Eyes!!! {currentSize}
          </div>
        </div>
        <div className="responses">
          <button onClick={() => handleResponse(true)}>I can see it clearly</button>
          <button onClick={() => handleResponse(false)}>I can't see it clearly</button>
        </div>
      </div>
    </div>
  );
};

export default NearVisionTest;
