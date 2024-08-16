// src/components/App1.js
import React, { useState } from 'react';
import InstructionComponent from '../EyeTesting/InstructionComponent';
import ArrowTestComponent from './ArrowTestComponent';
import TestComponent from './TestComponent';
import NearVisionTest from './NearVisionTest';
import ResultComponent from './ResultComponent';

const App1 = () => {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState([]);

  const handleNext = (newResults) => {
    setResults((prevResults) => [...prevResults, ...newResults]);
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <InstructionComponent onNext={() => setStep(step + 1)} />;
      case 1:
        return <ArrowTestComponent onTestComplete={handleNext} />;
      case 2:
        return <TestComponent onTestComplete={handleNext} />;
      case 3:
        return <NearVisionTest onTestComplete={handleNext} />;
      default:
        return <ResultComponent responses={results} />;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default App1;
