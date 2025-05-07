import React from 'react';
import { Link } from 'react-router-dom';
import "../css/ItemList.css";

const FeaturedCategories = ({ items }) => {
  // Extract unique categories from items
  const uniqueCategories = [
    ...new Map(items.map((item) => [item.category, item])).values(),
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {uniqueCategories.map((categoryItem, index) => (
          <Link
            to={`/category/${items.category}`}
            key={index}
            className="category-card"
          >
            <img
              src={categoryItem.image}
              alt={categoryItem.category}
              loading="lazy"
            />
            <div className="category-name">{categoryItem.category}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
