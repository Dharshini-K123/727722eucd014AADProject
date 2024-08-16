import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Modal.css'; // Import CSS for modal styling

const SignInForm = ({ closeModal, openLogin, onSignUp }) => {
  const [name, setName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post('http://localhost:8080/register', {
        name: name,
        emailAddress: emailAddress,
        password: password,
      });

      if (response.status === 200) {
        alert('You have signed up successfully!');

        // Assuming the response contains the user ID
        const userId = response.data.id;

        // Fetch user data after successful registration
        const userResponse = await axios.get(`http://localhost:8080/get/${userId}`);
        if (userResponse.status === 200) {
          const user = userResponse.data;
          onSignUp(user); // Optionally pass user data to parent component
          localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
          closeModal(); // Optionally close the modal after sign up
        } else {
          alert('An error occurred while fetching user data. Please try again.');
        }
      } else {
        alert('An error occurred during registration. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content1">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className='closeh2'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <button onClick={openLogin}>Login</button></p>
      </div>
    </div>
  );
};

export default SignInForm;
