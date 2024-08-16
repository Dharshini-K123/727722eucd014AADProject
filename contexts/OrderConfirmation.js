import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice, paymentMethod } = location.state || { cartItems: [], totalPrice: 0, paymentMethod: '' };
  
  const [showModal, setShowModal] = useState(false);
  const [trackingSteps, setTrackingSteps] = useState([]);
  
  const getRandomDate = (start) => {
    const randomDays = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
    const randomDate = new Date(start);
    randomDate.setDate(start.getDate() + randomDays);
    return randomDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };
  
  const generateTrackingSteps = () => {
    const locations = ['Mumbai', 'Bangalore', 'Chennai', 'Coimbatore', 'Trichy'];
    const startDate = new Date(); // Start from the current date
    const dates = [];

    // Generate dates in ascending order
    for (let i = 0; i < locations.length; i++) {
      const newDate = i === 0 ? getRandomDate(startDate) : getRandomDate(new Date(dates[i - 1]));
      dates.push(newDate);
    }

    const steps = [
      { date: dates[0], city: locations[0], content: 'Order Confirmed' },
      { date: dates[1], city: locations[1], content: 'Order Shipped from Mumbai' },
      { date: dates[2], city: locations[2], content: 'Reached Delivery Hub in Bangalore' },
      { date: dates[3], city: locations[3], content: 'In Transit' },
      { date: dates[4], city: locations[4], content: 'Order Delivered' }
    ];
    
    setTrackingSteps(steps);
  };
  
  const handleTrackOrder = () => {
    generateTrackingSteps();
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="confirm-order-page">
      <nav className="confirm-nav-bar">
        <div className="confirm-nav-left">
          <h1>SpecGo</h1>
        </div>
        <div className="confirm-nav-right">
          <button className="confirm-home-button" onClick={() => navigate('/')}>Home</button>
          <button className="confirm-review-button" onClick={() => navigate('/review')}>Review</button>
          <button className="confirm-continue-shopping-button" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </nav>
      <div className="confirm-order-box">
        <h2>Order Confirmation</h2>
        <div className="confirm-product-cards">
          {cartItems.map((product) => (
            <div className="confirm-product-card" key={product.id}>
              <img src={product.imageurl} alt={product.name} />
              <div className="confirm-product-details">
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="confirm-delivery-details">
          <h3>Delivery Details</h3>
          <p>Total Price: ₹{totalPrice}</p>
          <p>Payment Method: {paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}</p>
        </div>
        <div className="confirm-delivery-date">
          <p>Estimated Delivery Date: {getRandomDate(new Date())}</p>
        </div>
        <button className="confirm-track-button" onClick={handleTrackOrder}>Track Order</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Order Tracking</h2>
            <div className="tracking-info">
              {trackingSteps.map((step, index) => (
                <div className="tracking-step" key={index}>
                  {index > 0 && <div className="tracking-line"></div>}
                  <div className="tracking-dot"></div>
                  <div className="tracking-content">
                    <div className="tracking-detail">{step.content}</div>
                    <div className="tracking-date">{step.date}</div>
                    <div className="tracking-city">{step.city}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="modal-close-button" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;