// src/components/ResultComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ResultComponent.css'; // Import the CSS file

const calculateResults = (responses) => {
  const result = {
    duochrome: { totalResponses: 0, normalCount: 0, visibility: 0 },
    visualAcuity: { totalResponses: 0, normalCount: 0, visibility: 0 },
    nearVision: { totalResponses: 0, normalCount: 0, visibility: 0 },
  };

  responses.forEach((response) => {
    if (response.test === 'Duochrome') {
      result.duochrome.totalResponses += 1;
      if (response.result === 'Normal') {
        result.duochrome.normalCount += 1;
      }
    }

    if (response.test === 'Visual Acuity') {
      result.visualAcuity.totalResponses += 1;
      if (response.canSee) {
        result.visualAcuity.normalCount += 1;
      }
    }

    if (response.test === 'Near Vision') {
      result.nearVision.totalResponses += 1;
      if (response.canSee) {
        result.nearVision.normalCount += 1;
      }
    }
  });

  // Calculate visibility and power based on visibility
  const calculateVisibility = (result) => (
    result.totalResponses === 0 ? 0.00 : ((result.normalCount / result.totalResponses) * 100).toFixed(2)
  );

  const calculatePower = (visibility) => (
    visibility === 0 ? 0 : (1 / (visibility / 100)).toFixed(2) // Example formula, adjust as needed
  );

  return {
    duochrome: {
      ...result.duochrome,
      visibility: calculateVisibility(result.duochrome),
      power: calculatePower(calculateVisibility(result.duochrome)),
    },
    visualAcuity: {
      ...result.visualAcuity,
      visibility: calculateVisibility(result.visualAcuity),
      power: calculatePower(calculateVisibility(result.visualAcuity)),
    },
    nearVision: {
      ...result.nearVision,
      visibility: calculateVisibility(result.nearVision),
      power: calculatePower(calculateVisibility(result.nearVision)),
    },
  };
};

const ResultComponent = ({ responses }) => {
  const navigate = useNavigate();
  const { duochrome, visualAcuity, nearVision } = calculateResults(responses);

  return (
    <div className="result-container">
      <div className="navbar">
        <button className="home-button1" onClick={() => navigate('/')}>Home</button>
      </div>
      <h1>Test Results</h1>
      <div className="result-body">
        <div className="results-grid">
          <div className="test-results">
            <h2>Duochrome Test</h2>
            <p>Total Responses: {duochrome.totalResponses}</p>
            <p>Normal Responses: {duochrome.normalCount}</p>
            <p>Visibility: {duochrome.visibility}%</p>
            <p>Power: {duochrome.power} diopters</p>
          </div>

          <div className="test-results">
            <h2>Visual Acuity Test</h2>
            <p>Total Responses: {visualAcuity.totalResponses}</p>
            <p>Normal Responses: {visualAcuity.normalCount}</p>
            <p>Visibility: {visualAcuity.visibility}%</p>
            <p>Power: {visualAcuity.power} diopters</p>
          </div>

          <div className="test-results">
            <h2>Near Vision Test</h2>
            <p>Total Responses: {nearVision.totalResponses}</p>
            <p>Normal Responses: {nearVision.normalCount}</p>
            <p>Visibility: {nearVision.visibility}%</p>
            <p>Power: {nearVision.power} diopters</p>
          </div>
        </div>
      </div>
      <p className="result-footer">Please consult an eye specialist for further evaluation.</p>
    </div>
  );
};

export default ResultComponent;
