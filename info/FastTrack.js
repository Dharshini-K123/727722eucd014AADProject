import React, { useState } from 'react';
import '../styles/ProductInfo.css';
import { useNavigate } from 'react-router-dom';

const FastTrack = () => {
  const [mainImage, setMainImage] = useState("https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/f/t/ft1152ufp3_4_lar.jpg");

  const thumbnails = [
    "https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/f/t/ft1152ufp3_4_lar.jpg",
    "https://m.media-amazon.com/images/I/31RpASt6gbL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/f/t/ft1127mfp1_1_lar.jpg"
  ];

  const handleBackClick = () => {
    // Handle back button click, e.g., navigate to the previous page
    window.history.back();
  };

  
 

  return (
    <div>
      <nav className="navbarinfo">
        <button className="back-button" onClick={handleBackClick}>Back</button>
      </nav>
      <div className="product-info-container0">
        <div className="product-details0">
          <div className="product-images0">
            <img src={mainImage} alt="Main Glasses" className="main-image0" />
            <div className="thumbnail-images">
              {thumbnails.map((thumb, index) => (
                <img 
                  key={index} 
                  src={thumb} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="thumbnail-image" 
                  onClick={() => setMainImage(thumb)} 
                />
              ))}
            </div>
          </div>
          <div className="product-info0">
            <h1>Fastrack Oval</h1>
            <p>Stylish Oval Rimmed Eyeglasses</p>
            <p>Size: Small</p>
            <p>Color: Black</p>
            <p>Shape: Oval</p>
            <h2>₹1200</h2>
            <p>Inclusive of all taxes</p>
            <a className="back-button" href='http://127.0.0.1:5500/tryonface-master/index.html'>Try 3D</a>
            
            <div className="promotion">
              <p>Free Lenses with every frame</p>
              <p>Limited Period Offer</p>
              <p>Get Free BLU Screen or Progressive Lenses!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastTrack;