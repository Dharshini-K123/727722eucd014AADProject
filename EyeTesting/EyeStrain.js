import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EyeStrain.css';

const EyeStrain = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        
        <div className="nav-links">
          <a href="#" onClick={() => navigate('/')}><button>Home</button></a>
        </div>
      </div>
      <div className="container0">
        <div className="header0">
          <h1>Are you suffering with digital eye strain?</h1>
          <p>
            Digital Eye Strain is when your eyes feel tired or uncomfortable after using electronic devices for two or more hours.
          </p>
        </div>
        <a href="#" onClick={() => navigate('/eyestrainquiz') }className="test-button">Take the test to find out</a>
        
      </div>
    </div>
  );
};

export default EyeStrain;