import React, { useState, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import '../styles/EyeglassProduct.css'; // Ensure you have the styles defined


const SunglassProductWomen= () => {
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
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s15407-c1-sunglasses_g_2710_07_02_2023.jpg",
    },
    {
      id: 2,
      name: "Ray-Ban Round",
      description: "Classic Round Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 1500,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Vincent-Chase-VC-S14459-C2-Sunglasses_G_6919.jpg",
    },
    {
      id: 3,
      name: "Vogue Cat-Eye",
      description: "Elegant Cat-Eye Frames",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1800,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16344-c2-sunglasses_img_1685_24_01_2024.jpg",
    },
    {
      id: 4,
      name: "Oakley Sport",
      description: "Durable Sports Glasses",
      size: "Medium",
      color: "Black",
      shape: "Round",
      price: 2000,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s15867-c1-sunglasses_g_2539_09_21_23.jpg",
    },
    {
      id: 5,
      name: "Gucci Fashion",
      description: "High-Fashion Frames",
      size: "Medium",
      color: "Brown",
      shape: "Oval",
      price: 2500,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyb8kcTt_SdLGCp93v_QLrxNcKvGjQ7rQn--clyo_tezM5Ia4OfYySGGVtLXyvixkAra6o5pG7vyl3uNkMX8aIFZNnDDUdrZ87ypD7mFWjkyEhdMbDi2E8RZBEsr-fpSYGOwFi_dk&usqp=CAc",
    },
    {
      id: 6,
      name: "Prada Luxury",
      description: "Luxurious Designer Glasses",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 3000,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/Purple-Transparent-Purple-Full-Rim-Cat-Eye-John-JacobsJJ-Tints-JJ-S12437-C4-Sunglasses_john-jacobs-jj-s12437-c4-sunglasses_g_184718_02_2022.jpg",
    },
    {
      id: 7,
      name: "Titan Tough",
      description: "Tough and Durable Frames",
      size: "Small",
      color: "Black",
      shape: "Round",
      price: 900,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-the-metal-edit-vc-s15765-c1-sunglasses_img_4726_24_01_2024.jpg",
    },
    {
      id: 8,
      name: "Lenskart Basic",
      description: "Affordable Everyday Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Oval",
      price: 700,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQycMlnlLkLSR5SGFZVi0h9Bm5PANmOrEt1KvrcOmDOQAgcSMDRk_MPMgmlnQ0RSxFmatZPqpuvU4bs9aYxvLblGFPNRgpbaUmZWUIWCrVtqKFQfSXWKpAWPGcpDY8zXyspaV6Eunk&usqp=CAc",
    },
    {
      id: 9,
      name: "Polaroid Retro",
      description: "Retro Style Eyewear",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1100,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-gold-full-rim-cat-eye-vincent-chase-floral-edit-vc-s16766-c1-sunglasses_dsc_0424_27_03_2024.jpg",
    },
    {
      id: 10,
      name: "Fossil Flex",
      description: "Flexible Frames for Comfort",
      size: "Medium",
      color: "Black",
      shape: "Oval",
      price: 1400,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/green-gold-full-rim-round-vincent-chase-floral-edit-vc-s16768-c2-sunglasses_dsc_0402_27_03_2024.jpg",
    },
    {
      id: 11,
      name: "Burberry Classic",
      description: "Timeless Classic Design",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 2200,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/brown-gold-black-full-rim-geometric-vincent-chase-polarized-pilot-collection-vc-s15403-c2-sunglasses_g_0715_01_02_2023.jpg",
    },
    {
      id: 12,
      name: "Tom Ford Elegant",
      description: "Elegant and Stylish",
      size: "Large",
      color: "Blue",
      shape: "Round",
      price: 3500,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Silver-Maroon-Full-Rim-Geometric-Vincent-Chase-LIVEWIRE-VC-S14506-C5-Polarized-Sunglasses_G_7229.jpg",
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
          <h2>Sunglasses</h2>
         
          
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

export default SunglassProductWomen;
