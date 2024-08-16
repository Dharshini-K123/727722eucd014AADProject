import React, { useState } from "react";
import "../styles/ShopByCategory.css";
import MenCategory from "./MenCategory";
import WomenCategory from "./WomenCategory";
import KidsCategory from "./KidsCategory";

const ShopByCategory = ({ openLogin }) => {
  const [activeCategory, setActiveCategory] = useState("Men");

  const handleCategoryClick = (category) => {
    if (localStorage.getItem('user')) {
      setActiveCategory(category);
    } else {
      openLogin(); // Show login popup if user is not logged in
    }
  };

  return (
    <div className="shop-by-category">
      <h2>Shop by Category</h2>
      <div className="category-tabs">
        <button
          className={activeCategory === "Men" ? "active" : ""}
          onClick={() => handleCategoryClick("Men")}
        >
          MEN
        </button>
        <button
          className={activeCategory === "Women" ? "active" : ""}
          onClick={() => handleCategoryClick("Women")}
        >
          WOMEN
        </button>
        <button
          className={activeCategory === "Kids" ? "active" : ""}
          onClick={() => handleCategoryClick("Kids")}
        >
          KIDS
        </button>
      </div>
      <div className="category-content">
        {activeCategory === "Men" && <MenCategory />}
        {activeCategory === "Women" && <WomenCategory />}
        {activeCategory === "Kids" && <KidsCategory />}
      </div>
    </div>
  );
};

export default ShopByCategory;
