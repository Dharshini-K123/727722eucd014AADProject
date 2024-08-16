import React, { useState, useEffect } from "react";
import "../styles/Offers.css";

const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const offers = [
    {
      src: "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg",
      alt: "Offer 1"
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg",
      alt: "Offer 2"
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg",
      alt: "Offer 3"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="offers-container">
      <h2 className="brands-title">Meet Our Brands</h2>
      <div className="offers">
        {offers.map((offer, index) => (
          <img
            key={index}
            src={offer.src}
            alt={offer.alt}
            className={`offer-image ${index === currentSlide ? "active" : ""}`}
          />
        ))}
        <div className="dots">
          {offers.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
