import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/BuyNow.css';

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, quantities } = location.state || { cart: [], quantities: [] };

  const [cartItems, setCartItems] = useState(cart);
  const [quantitiesState, setQuantitiesState] = useState(quantities);
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    area: '',
    city: '',
    country: '',
    pincode: '',
  });
  const [errors, setErrors] = useState({});

  const totalPrice = cartItems.reduce(
    (sum, product, index) => sum + product.price * quantitiesState[index],
    0
  );

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!address.name) newErrors.name = 'Full Name is required';
    if (!address.phone) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(address.phone)) {
      newErrors.phone = 'Phone Number must be 10 digits';
    }
    if (!address.area) newErrors.area = 'Area is required';
    if (!address.city) newErrors.city = 'City is required';
    if (!address.country) newErrors.country = 'Country is required';
    if (!address.pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(address.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const removeProduct = (index) => {
    const product = cartItems[index];
    axios.delete(`http://localhost:8080/deletebuynow/${product.id}`)
      .then(response => {
        if (response.status === 204) {
          // Remove item from state
          const updatedCartItems = cartItems.filter((_, i) => i !== index);
          const updatedQuantities = quantitiesState.filter((_, i) => i !== index);
          setCartItems(updatedCartItems);
          setQuantitiesState(updatedQuantities);

          // Also remove from Cart
          axios.delete(`http://localhost:8080/deletecart/${product.id}`)
            .then(response => {
              if (response.status !== 204) {
                console.error('Error removing item from Cart');
              }
            })
            .catch(error => {
              console.error('Error removing item from Cart:', error);
            });
        } else {
          console.error('Error removing item from BuyNow');
        }
      })
      .catch(error => {
        console.error('Error removing item from BuyNow:', error);
      });
  };

  const handleProceedToPayment = () => {
    if (validateForm()) {
      axios.post('http://localhost:8080/adddeliverydetails', address)
        .then(response => {
          if (response.status === 201) {
            // Alert for successful delivery details insertion
            alert('Delivery details saved successfully!');
            
            // Remove items from cart after proceeding to payment
            Promise.all(cartItems.map((product) => axios.delete(`http://localhost:8080/deletecart/${product.id}`)))
              .then(() => {
                // Navigate to the place order page
                navigate('/placeorder', { state: { cartItems, totalPrice } });
              })
              .catch(error => {
                console.error('Error removing items from cart:', error);
              });
          } else {
            console.error('Error saving delivery details:', response);
          }
        })
        .catch(error => {
          console.error('Error saving delivery details:', error);
        });
    }
  };

  return (
    <div className="buy-now-page">
      <nav className="nav-bar">
        <button className="home-button" onClick={() => navigate('/')}>
          Home
        </button>
      </nav>
      <h2>Buy Now</h2>
      {cartItems.length > 0 ? (
        <div className="order-summary">
          <div className="product-summary1">
            {cartItems.map((product, index) => (
              <div className="product-card" key={product.id}>
                <img src={product.imageurl} alt={product.name} />
                <div className="product-details1">
                  <h3>{product.name}</h3>
                  <p>Price: ₹{product.price}</p>
                  <p>Quantity: {quantitiesState[index]}</p>
                  <p>Total: ₹{product.price * quantitiesState[index]}</p>
                  <button className="remove-button" onClick={() => removeProduct(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="address-form">
            <h3>Delivery Address</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={address.name}
              onChange={handleAddressChange}
              className="address-input"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleAddressChange}
              className="address-input"
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
            <input
              type="text"
              name="area"
              placeholder="Area"
              value={address.area}
              onChange={handleAddressChange}
              className="address-input"
            />
            {errors.area && <p className="error-message">{errors.area}</p>}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="address-input"
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={address.country}
              onChange={handleAddressChange}
              className="address-input"
            />
            {errors.country && <p className="error-message">{errors.country}</p>}
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleAddressChange}
              className="address-input"
            />
            {errors.pincode && <p className="error-message">{errors.pincode}</p>}
            <button
              className="proceed-button"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </button>
          </div>
          <div className="total-price">
            <h3>Total Price: ₹{totalPrice}</h3>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default BuyNow;