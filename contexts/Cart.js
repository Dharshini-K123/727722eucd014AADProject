import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [powerLevels, setPowerLevels] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user ? user.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from backend
    axios.get(`http://localhost:8080/getbyidcart/${user_id}`)
      .then(response => {
        const cartItems = response.data;
        setCart(cartItems);
        setPowerLevels(cartItems.map(() => ({ left: 0, right: 0 })));
        setQuantities(cartItems.map(() => 1));
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const handlePowerChange = (index, eye, increment) => {
    setPowerLevels((prevLevels) => {
      const newLevels = [...prevLevels];
      newLevels[index] = {
        ...newLevels[index],
        [eye]: Math.max(newLevels[index][eye] + increment, 0),
      };
      return newLevels;
    });
  };

  const handleQuantityChange = (index, value) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = value;
      return newQuantities;
    });
  };

  const handleRemoveFromCart = (id) => {
    axios.delete(`http://localhost:8080/deletecart/${id}`)
      .then(response => {
        if (response.status === 204) {
          // Remove item from cart
          setCart((prevCart) => prevCart.filter(item => item.id !== id));
        } else {
          console.error('Error removing item from cart');
        }
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
      });
  };

  const handleAddToBuyNow = (product, quantity) => {
    return axios.post('http://localhost:8080/addbuynow', {
     
      productId: product.id,
      name: product.name,
      description: product.description,
      size: product.size,
      color: product.color,
      shape: product.shape,
      imageurl: product.imageurl,
      price: product.price,
    });
  };

  const handleBuyNow = () => {
    // Add all cart items to the BuyNow table
    Promise.all(cart.map((product, index) => handleAddToBuyNow(product, quantities[index])))
      .then(() => {
        // Navigate to the BuyNow page with the current cart and quantities
        navigate('/buynow', { state: { cart, quantities } });
      })
      .catch(error => {
        console.error('Error adding items to BuyNow:', error);
      });
  };

  const totalPrice = cart.reduce((sum, product, index) => sum + product.price * quantities[index], 0);

  return (
    <div className="cart-page">
      <nav className="nav-bar">
        <button className="home-button" onClick={() => navigate('/')}>
          Home
        </button>
      </nav>
      <h2 className="cart-title">My Cart</h2>
      <div className="cart-grid">
        {cart.map((product, index) => (
          <div className="product-card2" key={product.id}>
            <img src={product.imageurl} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <div className="power-controls-container">
                <div className="power-control">
                  <button
                    className="decrement"
                    onClick={() => handlePowerChange(index, 'left', -1)}
                    disabled={powerLevels[index].left <= 0}
                  >
                    -
                  </button>
                  <span>Left {powerLevels[index].left}</span>
                  <button
                    className="increment"
                    onClick={() => handlePowerChange(index, 'left', 1)}
                  >
                    +
                  </button>
                </div>
                <div className="power-control">
                  <button
                    className="decrement"
                    onClick={() => handlePowerChange(index, 'right', -1)}
                    disabled={powerLevels[index].right <= 0}
                  >
                    -
                  </button>
                  <span>Right {powerLevels[index].right}</span>
                  <button
                    className="increment"
                    onClick={() => handlePowerChange(index, 'right', 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="quantity-select">
                <label htmlFor={`quantity-${index}`}><b>Quantity:</b></label>
                <select
                  id={`quantity-${index}`}
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="product-buttons">
                <button className="remove-button" onClick={() => handleRemoveFromCart(product.id)}>
                  Remove
                </button>
                <button
                  className="buy-now-button"
                  onClick={() => handleAddToBuyNow(product, quantities[index])}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h3>Total Amount: ₹{totalPrice}</h3>
        <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
