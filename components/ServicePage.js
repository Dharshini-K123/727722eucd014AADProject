import React, { useState } from 'react';
import '../styles/ServicePage.css';
import serviceImage from '../images/service-image.jpg'; // Import the image
import ServiceForm from './ServiceForm';
import { useNavigate } from 'react-router-dom'; // Import the ServiceForm component

const ServicePage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openModal = () => setIsFormVisible(true);
  const closeModal = () => setIsFormVisible(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div className="service-page">
    <header className="location-header">
    <div className="logo">SpecGo</div>
    <nav>
      <ul className="nav-links">
        <li>
          <button className="nav-button" onClick={navigateToHome}>
            Home
          </button>
        </li>
      </ul>
    </nav>
  </header>
      
      <div className="right-side">
        <img src={serviceImage} alt="Service" className="service-image" />
      </div>
      <div className="left-side">
        <h1 className="service-title">Need Service?</h1>
        <p className="service-description">SpecGo provides home services for our customers with the golden membership.</p>
        <button className="need-service-button" onClick={openModal}>Need Service</button>
      </div>
      {isFormVisible && (
        <ServiceForm closeModal={closeModal} />
      )}
    </div>
  );
};

export default ServicePage;