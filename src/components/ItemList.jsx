import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "../css/ItemList.css";

function ItemList({ items,filteredItems }) {
  // Define categories with images and category names
  const categoryOptions = [
    { label: "Men", value: "Men", image: "./assets/images/blueshirt.jpg" },
    { label: "Women", value: "Women", image: "./assets/images/drees1.jpg" },
    { label: "Accessories", value: "Accessories", image:"./assets/images/perfume.jpg" },
  ];

  return (
    <>
      {/* Shop by Category Section */}
      <section className="item-category">
        <h2>Shop by Category</h2>
        <div className="category">
          {categoryOptions.map((category, index) => (
            <Link to={`/category/${category.value}`} key={index}>
              <div className="category-section">
                <img className="category-img"  src={category.image} alt={category.label} />
                <div className="category-name">{category.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
  
      {/* DO NOT render item list on home page */}
    </>
  );
  
}

export default ItemList;
