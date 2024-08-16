import React, { useState, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import '../styles/EyeglassProduct.css'; // Ensure you have the styles defined


const ContactlensProductKids= () => {
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
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-24h-toric-monthly_aqualens-24h-toric-monthly---3lp_csvfile-1682208663780-135218.png.png",
    },
    {
      id: 2,
      name: "Ray-Ban Round",
      description: "Classic Round Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 1500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKP0fKHnpN8PjNe7FwtVd590nDnY6CNSGv1A&s",
    },
    {
      id: 3,
      name: "Vogue Cat-Eye",
      description: "Elegant Cat-Eye Frames",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1800,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-10h-monthly_csvfile-1706697736381-1.jpg",
    },
    {
      id: 4,
      name: "Oakley Sport",
      description: "Durable Sports Glasses",
      size: "Medium",
      color: "Black",
      shape: "Round",
      price: 2000,
      image: "data:image/jpeg;base64,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",
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
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-venus-grey-zero-power-monthly_venus_grey_kiara.png",
    },
    {
      id: 7,
      name: "Titan Tough",
      description: "Tough and Durable Frames",
      size: "Small",
      color: "Black",
      shape: "Round",
      price: 900,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-tricky-turquoise-powered-monthly---1lp_tricky_turquoise_kiara_01_09_2023.jpg",
    },
    {
      id: 8,
      name: "Lenskart Basic",
      description: "Affordable Everyday Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Oval",
      price: 700,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-black-rose-dailies-color_black_rose_kiara.png",
    },
    {
      id: 9,
      name: "Polaroid Retro",
      description: "Retro Style Eyewear",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1100,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-10lp-dailies-combo-pack-peacock-green-stormy-gray_csvfile-1709030631974-cl-combo-13-banner.png",
    },
    {
      id: 10,
      name: "Fossil Flex",
      description: "Flexible Frames for Comfort",
      size: "Medium",
      color: "Black",
      shape: "Oval",
      price: 1400,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-10lp-dailies-combo-pack-spicy-gray-tricky-turquoise_csvfile-1709029819472-cl-combo-9-banner.png",
    },
    {
      id: 11,
      name: "Burberry Classic",
      description: "Timeless Classic Design",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 2200,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-10lp-dailies-combo-pack-stormy-gray-tricky-turquoise_csvfile-1709030704516-cl-combo-15-banner.png",
    },
    {
      id: 12,
      name: "Tom Ford Elegant",
      description: "Elegant and Stylish",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 3500,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-10lp-dailies-combo-pack-spicy-gray-tricky-turquoise_csvfile-1709029819472-cl-combo-9-banner.png",
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
          <h2>Contact Lens</h2>
         
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

export default ContactlensProductKids;
