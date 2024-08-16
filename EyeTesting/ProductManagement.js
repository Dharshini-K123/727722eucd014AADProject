import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
import '../styles/ProductsManagement.css'; // Import the CSS for styling

const ProductManagement = () => {
  const [activeCategory, setActiveCategory] = useState('men');
  const [activeType, setActiveType] = useState('eyeglasses');
  const [products, setProducts] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    size: '',
    color: '',
    shape: '',
    price: '',
    imageurl: '',
    route: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [activeCategory, activeType]);

  const fetchProducts = async () => {
    let url = '';
    if (activeCategory === 'men') {
      switch (activeType) {
        case 'eyeglasses':
          url = 'http://localhost:8080/getproductmen';
          break;
        case 'sunglasses':
          url = 'http://localhost:8080/getSunproductmen';
          break;
        case 'computerglass':
          url = 'http://localhost:8080/getcomputerproductmen';
          break;
        case 'readingglass':
          url = 'http://localhost:8080/getreadproductmen';
          break;
        case 'contactlens':
          url = 'http://localhost:8080/getcontactproductmen';
          break;
        case 'accessories':
          url = 'http://localhost:8080/getAccessoryproductmen';
          break;
        default:
          break;
      }
    }
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async () => {
    let url = '';
    if (activeCategory === 'men') {
      switch (activeType) {
        case 'eyeglasses':
          url = 'http://localhost:8080/addproductmen';
          break;
        case 'sunglasses':
          url = 'http://localhost:8080/addSunproductmen';
          break;
        case 'computerglass':
          url = 'http://localhost:8080/addcomputerproductmen';
          break;
        case 'readingglass':
          url = 'http://localhost:8080/addreadproductmen';
          break;
        case 'contactlens':
          url = 'http://localhost:8080/addcontactproductmen';
          break;
        case 'accessories':
          url = 'http://localhost:8080/addAccessoryproductmen';
          break;
        default:
          break;
      }
    }
    try {
      await axios.post(url, { ...newProduct });
      fetchProducts();
      setNewProduct({
        name: '',
        description: '',
        size: '',
        color: '',
        shape: '',
        price: '',
        imageurl: '',
        route: ''
      });
      setShowAddProductForm(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    let url = '';
    if (activeCategory === 'men') {
      switch (activeType) {
        case 'eyeglasses':
          url = `http://localhost:8080/deleteproductmen/${productId}`;
          break;
        case 'sunglasses':
          url = `http://localhost:8080/deleteSunproductmen/${productId}`;
          break;
        case 'computerglass':
          url = `http://localhost:8080/deletecomputerproductmen/${productId}`;
          break;
        case 'readingglass':
          url = `http://localhost:8080/deletereadingglassproductmen/${productId}`;
          break;
        case 'contactlens':
          url = `http://localhost:8080/deletecontactproductmen/${productId}`;
          break;
        case 'accessories':
          url = `http://localhost:8080/deleteAccessoryproductmen/${productId}`;
          break;
        default:
          break;
      }
    }
    try {
      await axios.delete(url);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    let url = '';
    if (activeCategory === 'men') {
      switch (activeType) {
        case 'eyeglasses':
          url = `http://localhost:8080/updateproductmen/${editingProduct.id}`;
          break;
        case 'sunglasses':
          url = `http://localhost:8080/updateSunproductmen/${editingProduct.id}`;
          break;
        case 'computerglass':
          url = `http://localhost:8080/updatecomputerproductmen/${editingProduct.id}`;
          break;
        case 'readingglass':
          url = `http://localhost:8080/updatereadproductmen/${editingProduct.id}`;
          break;
        case 'contactlens':
          url = `http://localhost:8080/updatecontactproductmen/${editingProduct.id}`;
          break;
        case 'accessories':
          url = `http://localhost:8080/updateAccessoryproductmen/${editingProduct.id}`;
          break;
        default:
          break;
      }
    }
    try {
      await axios.put(url, editingProduct);
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="product-management">
      <div className="category-buttons">
        <button onClick={() => setActiveCategory('men')}>Men</button>
        <button onClick={() => setActiveCategory('women')}>Women</button>
        <button onClick={() => setActiveCategory('kids')}>Kids</button>
      </div>

      <div className="type-buttons">
        {['eyeglasses', 'sunglasses', 'computerglass', 'readingglass', 'contactlens', 'accessories'].map(type => (
          <button
            key={type}
            className={activeType === type ? 'active' : ''}
            onClick={() => setActiveType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="product-controls">
        <button onClick={() => setShowAddProductForm(!showAddProductForm)}>
          <FaPlus /> Add Product
        </button>

        {showAddProductForm && (
          <div className="add-product-form">
            <h3>Add New Product</h3>
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Size"
              value={newProduct.size}
              onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })}
            />
            <input
              type="text"
              placeholder="Color"
              value={newProduct.color}
              onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
            />
            <input
              type="text"
              placeholder="Shape"
              value={newProduct.shape}
              onChange={(e) => setNewProduct({ ...newProduct, shape: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.imageurl}
              onChange={(e) => setNewProduct({ ...newProduct, imageurl: e.target.value })}
            />
            <input
              type="text"
              placeholder="Route"
              value={newProduct.route}
              onChange={(e) => setNewProduct({ ...newProduct, route: e.target.value })}
            />
            <button onClick={handleAddProduct}>Add Product</button>
          </div>
        )}
      </div>

      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Size</th>
              <th>Color</th>
              <th>Shape</th>
              <th>Price</th>
              <th>Image</th> {/* Updated header for image */}
              <th>Route</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.size}</td>
                <td>{product.color}</td>
                <td>{product.shape}</td>
                <td>{product.price}</td>
                <td className="product-image-cell">
                  <a href={product.imageurl} target="_blank" rel="noopener noreferrer">
                    <img src={product.imageurl} alt={product.name} className="thumbnail-image" />
                  </a>
                </td>
                <td>{product.route}</td>
                <td className="actions">
                  <button onClick={() => setEditingProduct(product)}>
                    <FaEdit /> Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingProduct && (
        <div className="edit-product-form">
          <h3>Edit Product</h3>
          <input
            type="text"
            placeholder="Name"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={editingProduct.description}
            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Size"
            value={editingProduct.size}
            onChange={(e) => setEditingProduct({ ...editingProduct, size: e.target.value })}
          />
          <input
            type="text"
            placeholder="Color"
            value={editingProduct.color}
            onChange={(e) => setEditingProduct({ ...editingProduct, color: e.target.value })}
          />
          <input
            type="text"
            placeholder="Shape"
            value={editingProduct.shape}
            onChange={(e) => setEditingProduct({ ...editingProduct, shape: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={editingProduct.imageurl}
            onChange={(e) => setEditingProduct({ ...editingProduct, imageurl: e.target.value })}
          />
          <input
            type="text"
            placeholder="Route"
            value={editingProduct.route}
            onChange={(e) => setEditingProduct({ ...editingProduct, route: e.target.value })}
          />
          <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
