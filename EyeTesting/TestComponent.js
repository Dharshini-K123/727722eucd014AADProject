// src/components/TestComponent.js
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TestComponent.css';

const TestComponent = ({ onTestComplete }) => {
  const navigate = useNavigate();
  const [currentEye, setCurrentEye] = useState('left');
  const [responses, setResponses] = useState([]);
  const [testCount, setTestCount] = useState(0);
  const directions = ['up', 'down', 'left', 'right'];
  const sizes = [100, 75, 50, 25];
  const [currentDirection, setCurrentDirection] = useState('up');
  const [currentSize, setCurrentSize] = useState(100);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getNextTest = useCallback(() => {
    const newDirection = directions[Math.floor(Math.random() * directions.length)];
    const newSize = sizes[Math.floor(Math.random() * sizes.length)];
    setCurrentDirection(newDirection);
    setCurrentSize(newSize);
  }, [directions, sizes]);

  useEffect(() => {
    if (!isTransitioning) {
      getNextTest();
    }
  }, [isTransitioning, testCount, currentEye, getNextTest]);

  const handleResponse = (canSee) => {
    const updatedResponses = [...responses, { eye: currentEye, test: 'Visual Acuity', size: currentSize, direction: currentDirection, canSee }];
    setResponses(updatedResponses);

    if (testCount === sizes.length * directions.length - 1) {
      if (currentEye === 'right') {
        setIsTransitioning(true);
        setTimeout(() => {
          onTestComplete(updatedResponses); // Pass responses to parent
        }, 300);
      } else {
        setCurrentEye('right');
        setTestCount(0);
      }
    } else {
      setTestCount(testCount + 1);
    }
  };

  return (
    <div className={`visual-acuity-test ${isTransitioning ? 'slide-left' : ''}`}>
      <div className="navbar">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
      </div>
      <div>
        <h1>Eye Screening - Test Your Vision</h1>
        <h2>Visual Acuity Test</h2>
        <p>Select the direction button according to the direction of the letter E (the direction of the 3 arms of the letter E, such as whether it is facing to the left, right, up, or down) at each letter size.</p>
        <h2>COVER YOUR {currentEye.toUpperCase()} EYE</h2>
        <div className="test-area">
          <div className="arrow up" onClick={() => handleResponse(true)}>↑</div>
          <div className="arrow down" onClick={() => handleResponse(true)}>↓</div>
          <div className="arrow left" onClick={() => handleResponse(true)}>←</div>
          <div className="arrow right" onClick={() => handleResponse(true)}>→</div>
          <div className="letter-e" style={{ fontSize: `${currentSize}px`, transform: `translate(-50%, -50%) rotate(${currentDirection === 'up' ? '0deg' : currentDirection === 'down' ? '180deg' : currentDirection === 'left' ? '270deg' : '90deg'})` }}>
            E
          </div>
        </div>
        <div className="responses">
          <button onClick={() => handleResponse(false)}>I can't see it clearly</button>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
