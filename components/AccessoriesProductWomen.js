import React, { useState, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import '../styles/EyeglassProduct.css'; // Ensure you have the styles defined


const AccessoriesProductWomen = () => {
  const { addToWishlist } = useContext(StoreContext);
  const navigate = useNavigate();

  // Unique data for products
  const products = [
    // (same product data as before)
    {
      id: 1,
      name: "Fastrack Oval",
      description: "Stylish Oval Rimmed Eyeglasses",
      size: "Small",
      color: "Black",
      shape: "Oval",
      price: 1200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaXKSakz1n0dRlh5kXYFgbEU76O6SM0qDXw&s",
    },
    {
      id: 2,
      name: "Ray-Ban Round",
      description: "Classic Round Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 1500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLw-I_pshNNpXPa3X3Fxs9ITMOYEXRZm2kBA&s",
    },
    {
      id: 3,
      name: "Vogue Cat-Eye",
      description: "Elegant Cat-Eye Frames",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEC_s3FuK_dBGDqQbfM2lZp7ho-eqKTtxIQ&s",
    },
    {
      id: 4,
      name: "Oakley Sport",
      description: "Durable Sports Glasses",
      size: "Medium",
      color: "Black",
      shape: "Round",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1upqIRShZHNaXGdfQNnhNOFJu95tQT4jmZQ&s",
    },
    {
      id: 5,
      name: "Gucci Fashion",
      description: "High-Fashion Frames",
      size: "Medium",
      color: "Brown",
      shape: "Oval",
      price: 2500,
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 6,
      name: "Prada Luxury",
      description: "Luxurious Designer Glasses",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 3000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTcIR4HK3k14LIJKVGYC7K4L8eSWJmyatmw&s",
    },
    {
      id: 7,
      name: "Titan Tough",
      description: "Tough and Durable Frames",
      size: "Small",
      color: "Black",
      shape: "Round",
      price: 900,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFMH-v5uRPQbkwVkbVSWmRzZ2-JaBRUAHjQ&s",
    },
    {
      id: 8,
      name: "Lenskart Basic",
      description: "Affordable Everyday Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Oval",
      price: 700,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3p8QKhmOFhBiGw1NFIzSBX6w_7-qF3gq1Q&s",
    },
    {
      id: 9,
      name: "Polaroid Retro",
      description: "Retro Style Eyewear",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyK0pzA_r_AoNsbg4mnFAn896yDjaLhAQ4ag&s",
    },
    {
      id: 10,
      name: "Fossil Flex",
      description: "Flexible Frames for Comfort",
      size: "Medium",
      color: "Black",
      shape: "Oval",
      price: 1400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbz_Aoty3c33ogyKN3MpRVLraAKTc0-yYGA&s",
    },
    {
      id: 11,
      name: "Burberry Classic",
      description: "Timeless Classic Design",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 2200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIezrzyTIN7PeZ3vllvR6ksiH4TOCG5_1WQ&s",
    },
    {
      id: 12,
      name: "Tom Ford Elegant",
      description: "Elegant and Stylish",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 3500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhJdDHhy_Y4LdBrq1lQmI6UCYG_lAqua9Ng&s",
    },
  ];

  // State to manage products and their favorited status
  const [productList, setProductList] = useState(
    products.map((product) => ({ ...product, isFavorited: false }))
  );

  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { oval: false, round: false, catEye: false },
    color: { black: false, brown: false, blue: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan1000: false, lessThan2000: false },
  });

  // Handler to toggle the favorited status
  const toggleFavorite = (productId) => {
    const updatedProducts = productList.map((product) => {
      if (product.id === productId) {
        const updatedProduct = {
          ...product,
          isFavorited: !product.isFavorited,
        };
        if (!product.isFavorited) {
          addToWishlist(updatedProduct);
        }
        return updatedProduct;
      }
      return product;
    });
    setProductList(updatedProducts);
  };

  // Handler to toggle filter selection
  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

  const getFilteredProducts = () => {
    return productList.filter((product) => {
      const { size, color, shape, price } = selectedFilters;

      const matchesSize = Object.entries(size).some(
        ([key, value]) => value && product.size.toLowerCase() === key
      );

      const matchesColor = Object.entries(color).some(
        ([key, value]) => value && product.color.toLowerCase() === key
      );

      const matchesShape = Object.entries(shape).some(
        ([key, value]) => value && product.shape.toLowerCase() === key
      );

      const matchesPrice =
        (price.lessThan1000 && product.price < 1000) ||
        (price.lessThan2000 && product.price < 2000) ||
        (!price.lessThan1000 && !price.lessThan2000);

      return (
        (matchesSize || Object.values(size).every((v) => !v)) &&
        (matchesColor || Object.values(color).every((v) => !v)) &&
        (matchesShape || Object.values(shape).every((v) => !v)) &&
        matchesPrice
      );
    });
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="eyeglass-page">
      <nav className="navbar1">
        <button
          className="nav-button"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/wishlist')}
        >
          Wishlist ❤️
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/cart')}
        >
          Cart 🛒
        </button>
      </nav>
      <aside className="filters">
        <h2>Filters</h2>
        <button
          className="reset"
          onClick={() =>
            setSelectedFilters({
              shape: { oval: false, round: false, catEye: false },
              color: { black: false, brown: false, blue: false },
              size: { small: false, medium: false, large: false },
              price: { lessThan1000: false, lessThan2000: false },
            })
          }
        >
          Reset
        </button>
        <div className="filter-group">
          <h3>Frame Shape</h3>
          {["oval", "round", "catEye"].map((shape) => (
            <div key={shape} className="filter-option">
              <input
                type="checkbox"
                id={shape}
                checked={selectedFilters.shape[shape]}
                onChange={() => toggleFilter("shape", shape)}
              />
              <label
                htmlFor={shape}
                style={{
                  color: selectedFilters.shape[shape] ? "orange" : "black",
                }}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Frame Color</h3>
          {["black", "brown", "blue"].map((color) => (
            <div key={color} className="filter-option">
              <input
                type="checkbox"
                id={color}
                checked={selectedFilters.color[color]}
                onChange={() => toggleFilter("color", color)}
              />
              <label
                htmlFor={color}
                style={{
                  color: selectedFilters.color[color] ? "orange" : "black",
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Frame Size</h3>
          {["small", "medium", "large"].map((size) => (
            <div key={size} className="filter-option">
              <input
                type="checkbox"
                id={size}
                checked={selectedFilters.size[size]}
                onChange={() => toggleFilter("size", size)}
              />
              <label
                htmlFor={size}
                style={{
                  color: selectedFilters.size[size] ? "orange" : "black",
                }}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Price</h3>
          {[
            { label: "Less than ₹1000", value: "lessThan1000" },
            { label: "Less than ₹2000", value: "lessThan2000" },
          ].map(({ label, value }) => (
            <div key={value} className="filter-option">
              <input
                type="checkbox"
                id={value}
                checked={selectedFilters.price[value]}
                onChange={() => toggleFilter("price", value)}
              />
              <label
                htmlFor={value}
                style={{
                  color: selectedFilters.price[value] ? "orange" : "black",
                }}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </aside>
      <main className="products">
        <div className="product-header">
          <h2>Accessories</h2>
          
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card1" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist"
                onClick={() => toggleFavorite(product.id)}
                style={{
                  color: product.isFavorited ? "red" : "transparent",
                  border: "1px solid red",
                }}
              >
                ❤️
              </button>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <p>Inclusive of all taxes</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AccessoriesProductWomen;
