import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/EyeglassProduct.css'; // Ensure you have the styles defined

const ReadingglassProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
const user_id = user ? user.id : null;
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { oval: false, round: false, catEye: false },
    color: { black: false, brown: false, blue: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan1000: false, lessThan2000: false },
  });

  useEffect(() => {
    // Fetch products
    axios
      .get('http://localhost:8080/getreadproductmen') // Adjust the URL as needed
      .then((response) => {
        const productsWithFavorite = response.data.map((product) => ({
          ...product,
          isFavorited: false,
        }));
        setProducts(response.data);
        setProductList(productsWithFavorite);

        // After fetching products, fetch wishlist items
        axios
          .get('http://localhost:8080/getwishlist')
          .then((wishlistResponse) => {
            const wishlistItems = wishlistResponse.data;

            // Update productList to set isFavorited true where product.id matches wishlistItem.productId
            const updatedProductList = productsWithFavorite.map((product) => {
              const isFavorited = wishlistItems.some(
                (wishlistItem) => wishlistItem.productId === product.id
              );
              return { ...product, isFavorited };
            });

            setProductList(updatedProductList);
          })
          .catch((wishlistError) => {
            console.error('Error fetching wishlist items:', wishlistError);
          });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Handle navigation to product details
  const handleProductClick = (route) => {
    navigate(route);
  };

  // Toggle favorite status of a product
  const toggleFavorite = (productId) => {
    const updatedProducts = productList.map((product) => {
      if (product.id === productId) {
        const updatedProduct = {
          ...product,
          isFavorited: !product.isFavorited,
        };

        if (!product.isFavorited) {
          // Adding to wishlist
          const wishlistItem = {
            user_id:user_id,
            productId: product.id,
            name: product.name,
            description: product.description,
            size: product.size,
            color: product.color,
            shape: product.shape,
            imageurl: product.imageurl,
            price: product.price,
          };
          axios
            .post('http://localhost:8080/addwishlist', wishlistItem)
            .then((response) => {
              console.log('Product added to wishlist:', response.data);
            })
            .catch((error) => {
              console.error('Error adding product to wishlist:', error);
            });
        } else {
          // Removing from wishlist
          axios
            .delete(`http://localhost:8080/deletewishlist/${product.id}`)
            .then((response) => {
              console.log('Product removed from wishlist:', response.data);
            })
            .catch((error) => {
              console.error('Error removing product from wishlist:', error);
            });
        }
        return updatedProduct;
      }
      return product;
    });
    setProductList(updatedProducts);
  };

  // Toggle filter selections
  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

  // Apply filters to the product list
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
      {/* Navigation Bar */}
      <nav className="navbar1">
        <button className="nav-button" onClick={() => navigate('/')}>
          Home
        </button>
        <button className="nav-button" onClick={() => navigate('/wishlist')}>
          Wishlist ❤️
        </button>
        <button className="nav-button" onClick={() => navigate('/cart')}>
          Cart 🛒
        </button>
      </nav>

      {/* Filters Sidebar */}
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

        {/* Frame Shape Filters */}
        <div className="filter-group">
          <h3>Frame Shape</h3>
          {['oval', 'round', 'catEye'].map((shape) => (
            <div key={shape} className="filter-option">
              <input
                type="checkbox"
                id={shape}
                checked={selectedFilters.shape[shape]}
                onChange={() => toggleFilter('shape', shape)}
              />
              <label
                htmlFor={shape}
                style={{
                  color: selectedFilters.shape[shape] ? 'orange' : 'black',
                }}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Frame Color Filters */}
        <div className="filter-group">
          <h3>Frame Color</h3>
          {['black', 'brown', 'blue'].map((color) => (
            <div key={color} className="filter-option">
              <input
                type="checkbox"
                id={color}
                checked={selectedFilters.color[color]}
                onChange={() => toggleFilter('color', color)}
              />
              <label
                htmlFor={color}
                style={{
                  color: selectedFilters.color[color] ? 'orange' : 'black',
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Frame Size Filters */}
        <div className="filter-group">
          <h3>Frame Size</h3>
          {['small', 'medium', 'large'].map((size) => (
            <div key={size} className="filter-option">
              <input
                type="checkbox"
                id={size}
                checked={selectedFilters.size[size]}
                onChange={() => toggleFilter('size', size)}
              />
              <label
                htmlFor={size}
                style={{
                  color: selectedFilters.size[size] ? 'orange' : 'black',
                }}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Price Filters */}
        <div className="filter-group">
          <h3>Price</h3>
          {[
            { label: 'Less than ₹1000', value: 'lessThan1000' },
            { label: 'Less than ₹2000', value: 'lessThan2000' },
          ].map(({ label, value }) => (
            <div key={value} className="filter-option">
              <input
                type="checkbox"
                id={value}
                checked={selectedFilters.price[value]}
                onChange={() => toggleFilter('price', value)}
              />
              <label
                htmlFor={value}
                style={{
                  color: selectedFilters.price[value] ? 'orange' : 'black',
                }}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </aside>

      {/* Products Display */}
      <main className="products">
        <div className="product-header">
          <h2>Reading glasses</h2>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card1" key={product.id}>
              <img src={product.imageurl} alt={product.name} />
              <button
  className="wishlist"
  onClick={() => toggleFavorite(product.id)}
  style={{
    color: product.isFavorited ? 'red' : 'black',
    border: '1px solid red',
  }}
>
  {product.isFavorited ?  '❤️': '🤍'}
</button>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <button
                className="product-button"
                onClick={() => handleProductClick(product.route)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReadingglassProduct;
