import React, { useState } from 'react';
import '../styles/ProductInfo.css';

const RayBan = () => {
  const [mainImage, setMainImage] = useState("https://assets2.vogue-eyewear.com/cdn-record-files-pi/20284d07-01b8-4773-b474-afe200f22795/9ee43674-f911-4bf1-ba9d-afe200fee215/0VO5519__2386__P21__shad__qt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1");
  const [selectedColor, setSelectedColor] = useState("Brown");

  const images = {
    Brown: [
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/20284d07-01b8-4773-b474-afe200f22795/9ee43674-f911-4bf1-ba9d-afe200fee215/0VO5519__2386__P21__shad__qt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/20284d07-01b8-4773-b474-afe200f22795/5966ccd0-88f7-4aa2-a605-afe200feea3d/0VO5519__2386__P21__shad__bk.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/20284d07-01b8-4773-b474-afe200f22795/24be0bab-464b-4b04-b059-afe200fee7ff/0VO5519__2386__P21__shad__lt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1"
    ],
    Red: [
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/5ef5ceed-1a2d-49e9-bc31-afe200f25b9c/827304a2-5e79-435e-bbc9-afe200f25ed6/0VO5519__3080__P21__shad__qt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/5ef5ceed-1a2d-49e9-bc31-afe200f25b9c/45acb1e3-e80a-44ee-8a42-afe200f261d8/0VO5519__3080__P21__shad__fr.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/5ef5ceed-1a2d-49e9-bc31-afe200f25b9c/a5568862-5e09-4e2f-8907-afe200f26359/0VO5519__3080__P21__shad__lt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1"
    ],
    Green: [
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/0d6b2a7b-05dd-4d45-b574-afe200f23216/45f4ca5f-b76e-4414-9d20-afe200f234db/0VO5519__3086__P21__shad__qt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/0d6b2a7b-05dd-4d45-b574-afe200f23216/4750c2c8-8eb2-46a9-b9b7-afe200f23d4d/0VO5519__3086__P21__shad__cfr.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/0d6b2a7b-05dd-4d45-b574-afe200f23216/f15fa054-183c-4efc-bdf6-afe200f239bf/0VO5519__3086__P21__shad__lt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1"
    ],
    Pink: [
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/f7d55f82-dbaf-4ea5-8497-afe200f22d27/a7dc13cb-3e60-490b-b125-afe200ff0cc7/0VO5519__2942__P21__shad__qt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/f7d55f82-dbaf-4ea5-8497-afe200f22d27/9ffae9eb-4cf9-423d-83fa-afe200ff10c7/0VO5519__2942__P21__shad__lt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1",
      "https://assets2.vogue-eyewear.com/cdn-record-files-pi/f7d55f82-dbaf-4ea5-8497-afe200f22d27/9bcc3112-4b4e-4685-b4f2-afe200ff1235/0VO5519__2942__P21__shad__bk.png?impolicy=HB_parameters_transp&sclw=1&sclh=1"
    ]
  };

  const colors = [
    { name: "Brown", color: "#8B4513" },
    { name: "Red", color: "#FF0000" },
    { name: "Green", color: "#355034" },
    { name: "Pink", color: "#83687a" }
  ];

  const handleColorClick = (colorName) => {
    setSelectedColor(colorName);
    setMainImage(images[colorName][0]);
  };

  const handleBackClick = () => {
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
              {images[selectedColor].map((thumb, index) => (
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
            <h1>Ray-Ban Round</h1>
            <p>Classic Round Glasses</p>
            <p>Size: Medium</p>
            <p>Color: {selectedColor}</p>
            <p>Shape: Round</p>
            <h2>₹1500</h2>
            <p>Inclusive of all taxes</p>
            <a className="back-button" href='http://127.0.0.1:5500/tryonface-master/fron1.html'>Try 3D</a>
            <div className="color-options">
              {colors.map((color, index) => (
                <div 
                  key={index} 
                  className={`color-circle ${selectedColor === color.name ? 'selected' : ''}`} 
                  style={{ backgroundColor: color.color }} 
                  title={color.name}
                  onClick={() => handleColorClick(color.name)}
                ></div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RayBan;