import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Wishlist.css';

export const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const [messageQueue, setMessageQueue] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user ? user.id : null;

  useEffect(() => {
    if (user_id) {
      axios.get(`http://localhost:8080/getbyidwishlist/${user_id}`)
        .then(response => {
          console.log('Wishlist response:', response.data); // Log the response
          // Ensure response.data is an array
          if (Array.isArray(response.data)) {
            setWishlist(response.data);
          } else {
            console.error('Unexpected response format:', response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching wishlist:', error);
        });
    }
  }, [user_id]);

  useEffect(() => {
    if (messageQueue.length > 0 && !currentMessage) {
      setCurrentMessage(messageQueue[0]);
      setMessageQueue(prevQueue => prevQueue.slice(1));
    }
  }, [messageQueue, currentMessage]);

  useEffect(() => {
    if (currentMessage) {
      const timer = setTimeout(() => {
        setCurrentMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentMessage]);

  const handleAddToCart = (product) => {
    axios.post('http://localhost:8080/addcart', {
      user_id:user_id,
      productId: product.id,
      name: product.name,
      description: product.description,
      size: product.size,
      color: product.color,
      shape: product.shape,
      imageurl: product.imageurl,
      price: product.price,
    })
    .then(() => {
      setMessageQueue(prevQueue => [
        ...prevQueue,
        `${product.name} added to cart!`,
      ]);
    })
    .catch(error => {
      console.error('Error adding to cart:', error);
    });
  };

  const handleRemoveFromWishlist = (productId) => {
    if (user_id) {
      axios.delete(`http://localhost:8080/deletewishlist/${productId}`)
        .then(() => {
          setWishlist(wishlist.filter(product => product.id !== productId));
        })
        .catch(error => {
          console.error('Error removing from wishlist:', error);
        });
    }
  };

  return (
    <div className="wishlist-container">
      <header className="header1">
        <h1>SpecGo</h1>
        <div>
          <button className="home-button" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="home-button" onClick={() => navigate('/cart')}>
            Cart
          </button>
        </div>
      </header>

      <div className="subheader">
        <h2>My Wishlist ❤️</h2>
      </div>

      <main className="wishlist-page">
        <div className="wishlist-grid">
          {Array.isArray(wishlist) && wishlist.length > 0 ? (
            wishlist.map(product => (
              <div className="product-card1" key={product.id}>
                <img src={product.imageurl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Size: {product.size}</p>
                <p>Color: {product.color}</p>
                <p>Shape: {product.shape}</p>
                <p>₹{product.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="remove-from-wishlist"
                  onClick={() => handleRemoveFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No items in wishlist</p>
          )}
        </div>
      </main>

      {currentMessage && (
        <div className="floating-message">
          {currentMessage}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
