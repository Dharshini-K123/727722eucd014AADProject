import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Service2.css';

const Service2 = () => {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/service'); // Replace '/your-path' with the desired path
  };

  return (
    <div className="service2">
      
      <div className="content">
        <p>Specs got broken? Don't Worry</p>
        <p>Service your Specs from Home immediately!!!</p>
        <div className="arrow" onClick={handleArrowClick}>
        <i className="fa fa-arrow-left"></i>
      </div>
      </div>
    </div>
  );
};

export default Service2;
