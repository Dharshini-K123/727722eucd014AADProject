import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';
import gpayQrCode from '../images/image.png'; // Ensure QR code image exists
import '../styles/PlaceOrder.css';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    // Fetch data from the buynow table
    axios.get('http://localhost:8080/getbuynow')
      .then(response => {
        console.log(response.data); // Log the response to ensure data structure
        const fetchedItems = response.data;
        setCartItems(fetchedItems);
        // Calculate total price based only on item price, excluding quantity
        const calculatedTotalPrice = fetchedItems.reduce(
          (sum, item) => sum + item.price,
          0
        );
        setTotalPrice(calculatedTotalPrice);
      })
      .catch(error => {
        console.error('Error fetching BuyNow data:', error);
      });
  }, []);

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    setShowPaymentModal(true);
  };

  const sendEmail = () => {
    const emailParams = {
      to_name: 'User', // Replace with recipient's name or dynamic value
      message: `Your payment of ₹${totalPrice} via ${paymentMethod} has been confirmed.`,
      to_email: 'user@example.com', // Replace with recipient's email or dynamic value
    };

    emailjs.send('service_xp9wxnc', 'template_rarh446', emailParams, 'icFRrqNvr_58r0CQl') // Replace with your EmailJS user ID
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Payment confirmed and email sent!');
        navigate('/confirmation', { state: { cartItems, totalPrice, paymentMethod } });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Payment confirmed but failed to send email.');
      });
  };

  const handlePaymentConfirmation = () => {
    setShowPaymentModal(false);
    sendEmail();
  };

  return (
    <div className="order-place-order-page">
      <nav className="order-nav-bar">
        <div className="order-title">SpecGo</div>
        <button className="order-home-button" onClick={() => navigate('/')}>
          Home
        </button>
      </nav>
      <div className="order-content-wrapper">
        <div className="order-product-summary">
          {cartItems.map((product) => (
            <div className="order-product-card" key={product.id}>
              <img src={product.imageurl} alt={product.name} />
              <div className="order-product-details">
                <h3>{product.name}</h3> {/* Display the product name */}
                <p>Price: ₹{product.price}</p>
               
              </div>
              <p>Total Price: ₹{totalPrice}</p>
            </div>
            
          ))}
        </div>
        <div className="order-payment-section">
          <h2>Select Payment Method</h2>
          <div className="order-payment-options">
            {['cash', 'gpay', 'phonepe', 'upi', 'netbanking'].map((method) => (
              <div key={method} className="order-payment-option">
                <div
                  className={`order-round ${paymentMethod === method ? 'order-selected' : ''}`}
                  onClick={() => handlePaymentMethodClick(method)}
                />
                <span className="order-payment-method-label">
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showPaymentModal && (
        <div className="order-modal-overlay">
          <div className="order-modal-content">
            <button className="order-close-button" onClick={() => setShowPaymentModal(false)}>
              X
            </button>
            {paymentMethod === 'cash' && (
              <>
                <h3>Cash on Delivery</h3>
                <p>Total amount to be paid on delivery: ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'gpay' && (
              <>
                <h3>GPay Payment</h3>
                <img src={gpayQrCode} alt="GPay QR Code" className="order-qr-code" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'phonepe' && (
              <>
                <h3>PhonePe Payment</h3>
                <img src={gpayQrCode} alt="PhonePe QR Code" className="order-qr-code" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'upi' && (
              <>
                <h3>UPI Payment</h3>
                <input type="text" placeholder="Enter UPI ID" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'netbanking' && (
              <>
                <h3>Net Banking</h3>
                <input type="text" placeholder="Enter Account Number" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
