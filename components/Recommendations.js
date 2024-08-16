import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Recommendations.css'; // Ensure this CSS file is created and updated
import { FaHeart } from 'react-icons/fa';

const Recommendations = () => {
  const [likedImages, setLikedImages] = useState([]);

  const handleLike = (imageIndex) => {
    if (!likedImages.includes(imageIndex)) {
      setLikedImages([...likedImages, imageIndex]);
      // Here you can also add logic to add the image to the wishlist
    }
  };

  const images = [
    {
      src: 'https://chashma.com/cdn/shop/files/IMG_0048_cab9f67c-0ae2-4953-84e3-caffa24a64ec.jpg?v=1706800991&width=1500',
      name: 'Classic Frame 1',
      price: '₹1200',
      link: '/eyeglassproductwomen' // Link to the page
    },
    {
      src: 'https://chashma.com/cdn/shop/files/IMG_0309.jpg?v=1707310545&width=1500',
      name: 'Modern Frame 2',
      price: '₹3180',
      link: '/sunglassproductwomen' // Link to the page
    },
    {
      src: 'https://chashma.com/cdn/shop/files/IMG_0006_d01de715-a551-4a58-98af-9695bd8241ec.jpg?v=1706707360&width=1500',
      name: 'Retro Frame 3',
      price: '₹1130',
      link: '/readingglassproductwomen' // Link to the page
    },
    {
      src: 'https://chashma.com/cdn/shop/files/IMG_0001_97ad9d54-f190-483d-ae3e-947d4dc3bba6.jpg?v=1706605120&width=832',
      name: 'Elegant Frame 4',
      price: '₹1200',
      link: '/eyeglassproductwomen' // Link to the page
    },
    {
      src: 'https://chashma.com/cdn/shop/files/IMG_0011_96ba64ad-eb79-4e33-8d8d-71b6e0e3e2fc.jpg?v=1706606080&width=832',
      name: 'Sleek Frame 5',
      price: '₹1070',
      link: '/accessoryproductwomen' // Link to the page
    },
    {
      src: 'https://chashma.com/cdn/shop/files/IMG_0007_3314207b-7a23-4cd8-a148-0ca2aa430a68.jpg?v=1709801716&width=1500',
      name: 'Chic Frame 6',
      price: '₹1600',
      link: '/computerglassproductwomen' // Link to the page
    },
  ];

  return (
    <div className="recommendations">
      <h1>Our Recommendations</h1>
      <div className="recommendations-content">
        {images.concat(images).map((image, index) => ( // Duplicate images for continuous effect
          <div key={index} className="recommendation-item">
            <Link to={image.link} className="recommendation-link">
              <img src={image.src} alt={`Recommendation ${index + 1}`} />
            </Link>
            <div className="recommendation-info">
              <h2>{image.name}</h2>
              <p>{image.price}</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
