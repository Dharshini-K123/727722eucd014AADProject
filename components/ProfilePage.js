import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProflePage.css'; // Import the CSS file

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setName(userData.name);
      setEmail(userData.emailAddress);
      setPassword(userData.password);
    }
  }, []);

  if (!user) {
    return <div>No user data available</div>;
  }

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setName(user.name);
    setEmail(user.emailAddress);
    setPassword(user.password);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`http://localhost:8080/update/${user.id}`, {
        name,
        emailAddress,
        password
      });
      const updatedUser = { ...user, name, emailAddress, password };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Update localStorage
      alert('Profile updated successfully!');
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
    navigate('/'); // Redirect to homepage
  };

  const handleDeleteAccount = async () => {
    
      try {
        await axios.delete(`http://localhost:8080/delete/${user.id}`);
        localStorage.removeItem('user'); // Clear user data from localStorage
        alert('Account deleted successfully!');
        navigate('/'); // Redirect to homepage
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('An error occurred while deleting the account. Please try again.');
      
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <img src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="User Avatar" />
          <h1>{name}</h1>
        </div>
        <div className="profile-details">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> {emailAddress}</p>
          {editing ? (
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            <button onClick={handleEditClick}>Edit Profile</button>
          )}
        </div>
        <div className="profile-actions">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleDeleteAccount} className="delete-button">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;