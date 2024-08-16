import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css";
import SignInForm from "./SignInForm";
import LoginForm from "./LoginForm";
import ShopByCategory from "./ShopByCategory";
import Offers from "./Offers";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { FaEye } from 'react-icons/fa';
import Service2 from "./Service2";
import Recommendations from "./Recommendations";

const HomePage = () => {
  
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  // Check if user is logged in when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoggedIn(true);
    } else {
      openLogin(); // Redirect to login if not logged in
    }
  }, []);

  const handleImageClick = (path) => {
    if (loggedIn) {
      navigate(path);
    } else {
      openLogin();
    }
  };

  const offers = [
    // Offer details
  ];

  const openSignIn = () => {
    setShowSignIn(true);
    setShowLogin(false);
  };

  const closeSignIn = () => setShowSignIn(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignIn(false);
  };

  const closeLogin = () => setShowLogin(false);

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    closeLogin();
  };

  const handleSignUp = (userData) => {
    setLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    closeSignIn();
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">SpecGo</div>
        
        <SearchBar className="search-bar" />

        <div className="header-buttons">
          {!loggedIn && (
            <a href="#sign-in" className="header-link" onClick={openLogin}>
              Sign In
            </a>
          )}
        
          <a href="/cart" className="header-link">🛒 Cart</a>
          <a href="/wishlist" className="header-link">❤️ WishList</a>
         
          <a href="/profile" className="header-link">My Profile</a>
        </div>
      </header>
      
      <div className="search-bar-container">
        <div className="service-location-links">
          <a href="/service">Service</a>
          <a href="/location">Location</a>
          
          {/* Dropdown Menu */}
          <div className="dropdown">
            <button className="dropbtn">
              <FaEye /> Check Your Eye
            </button>
            <div className="dropdown-content">
              <a href="/Shape">Eye Shape</a>
              <a href="/App1">Eye Test</a>
              <a href="/eyestrain">Eye Strain</a>
            </div>
          </div>
        </div>
      </div>
      
      <main className="main-content1">
      <Service2 />
      <Recommendations/>
      <div className="image-content-container">
          <div className="image-container01">
          <img 
          src="//himalayaoptical.com/cdn/shop/files/store-locator_1920x1455_px.jpg?v=1673546295" 
          alt="Store Locator" 
          onClick={() => handleImageClick('/location')}
          />
          <div className="content01">
          <img 
            src="https://t3.ftcdn.net/jpg/08/33/89/48/360_F_833894802_5M1MJjSW0P9JQ0Dg4eeZDfEjcXYYNVUe.jpg"
            alt="Locator icon" 
            onClick={() => handleImageClick('/location')}
          />
              <h1>Store Locator</h1>
              <h2>Find our stores near you. We offer a wide range of frames and lenses to suit your style and needs.</h2>
            </div>
          </div>
          
          <div className="image-container02">
            <div className="content02">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_dLAj0-VXqIwbVhhl7do38VH12_2vTco0PErN48HusXkK5iacccl21X_eTueHiO0N0E&usqp=CAU" 
              alt="Home Try On" 
              onClick={() => handleImageClick('/ThreeD')}
            />
              <h1>Home Try On</h1>
              <h2>Try on frames from the comfort of your home. See how they look before making a purchase.</h2>
            </div>
            <img 
              src="//himalayaoptical.com/cdn/shop/files/home-try-on_1920x1455_px_2.jpg?v=1688561316" 
              alt="Home Try On" 
              onClick={() => handleImageClick('/ThreeD')}
            />
          </div>
        
        </div>
    
      
      <ShopByCategory openLogin={openLogin} />
      <Offers offers={offers} />
     
    </main>
    
      {showSignIn && (
        <SignInForm
          closeModal={closeSignIn}
          openLogin={openLogin}
          onSignUp={handleSignUp}
        />
      )}
      {showLogin && (
        <LoginForm
          closeModal={closeLogin}
          openSignUp={openSignIn}
          onLogin={handleLogin}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default HomePage;
