import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaLock, FaPlus, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/UsersManagement.css'; // Import the CSS for styling

const UserManagement = ({ setFlashMessage }) => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    emailAddress: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getuser');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditClick = (userId) => {
    setEditUserId(userId);
  };

  const handleEditChange = (e, userId) => {
    const { name, value } = e.target;
    setUsers(users.map(user =>
      user.id === userId ? { ...user, [name]: value } : user
    ));
  };

  const handleEditSave = async (userId) => {
    try {
      const userToUpdate = users.find(user => user.id === userId);
      await axios.put(`http://localhost:8080/update/${userId}`, userToUpdate);
      setEditUserId(null);
      setFlashMessage('User updated successfully!');
      setTimeout(() => setFlashMessage(''), 3000);
    } catch (error) {
      console.error('Error updating user:', error);
      setFlashMessage('Error updating user. Please try again.');
      setTimeout(() => setFlashMessage(''), 3000);
    }
  };

  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:8080/delete/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
        setFlashMessage('User deleted successfully!');
        setTimeout(() => setFlashMessage(''), 3000);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleBlockUser = (userId) => {
    setFlashMessage('User blocked successfully!');
    setTimeout(() => setFlashMessage(''), 3000);
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/register', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', emailAddress: '', password: '' });
      setShowAddUserForm(false);
      setFlashMessage('User added successfully!');
      setTimeout(() => setFlashMessage(''), 3000);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="users-management">
      <button
        className="add-user-button"
        onClick={() => setShowAddUserForm(!showAddUserForm)}
      >
        <FaPlus /> Add User
      </button>

      {showAddUserForm && (
        <div className="add-user-form">
          <h3>Add New User</h3>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={newUser.emailAddress}
            onChange={(e) => setNewUser({ ...newUser, emailAddress: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      )}

      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                {editUserId === user.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={(e) => handleEditChange(e, user.id)}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="emailAddress"
                        value={user.emailAddress}
                        onChange={(e) => handleEditChange(e, user.id)}
                      />
                    </td>
                    <td>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={user.password || ''} // Allow password update
                        onChange={(e) => handleEditChange(e, user.id)}
                      />
                      <button onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleEditSave(user.id)}>Save</button>
                      <button onClick={() => setEditUserId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.emailAddress}</td>
                    <td>
                      {showPassword ? user.password : '*****'}
                      <button onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleEditClick(user.id)}><FaEdit /></button>
                      <button onClick={() => handleDeleteUser(user.id)}><FaTrashAlt /></button>
                      <button onClick={() => handleBlockUser(user.id)}><FaLock /></button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
