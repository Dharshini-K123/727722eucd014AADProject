import React, { useState } from 'react';
import '../styles/ServiceForm.css';
import { FaThumbsUp } from 'react-icons/fa'; // Import the thumbs-up icon from react-icons

const ServiceForm = ({ closeModal }) => {
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [address, setAddress] = useState('');
  const [formattedAddress, setFormattedAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ description, photo, address: formattedAddress });
    setIsSubmitted(true); // Set form submission state to true
    // Optionally, you can also close the modal after submission
    setTimeout(closeModal, 2000); // Close modal after 2 seconds
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddressFromCoords(latitude, longitude);
          setAddress(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const getAddressFromCoords = (latitude, longitude) => {
    
    const apiKey = '340970e546e44ffc803b31f28d865f99';
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const { formatted } = data.results[0];
          setFormattedAddress(formatted);
        } else {
          console.error('No results found');
        }
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
      });
  };

  return (
    <div className="service-form-modal">
      <div className="service-form-container">
        <h2>Describe Your Problem</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Photo</label>
            <input type="file" onChange={handlePhotoChange} required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={formattedAddress}
              onChange={(e) => setFormattedAddress(e.target.value)}
              required
            />
            <button type="button" onClick={handleGetLocation}>
              Use Current Location
            </button>
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
        {isSubmitted && (
          <div className="thumbs-up">
            <FaThumbsUp size={50} color="green" /> {/* Display the thumbs-up icon */}
            <p>Thank you for your submission!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceForm;