import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Item from "./Item";
import "../css/cate.css"

const CategoryPage = ({ items }) => {
  const { categoryName } = useParams();

  // Filter items based on the category
  const filteredItems = items.filter(item =>
  item.gender.toLowerCase() === categoryName.toLowerCase() ||
  item.category.toLowerCase() === categoryName.toLowerCase()
);

  return (
    <div>
      <h2>{categoryName}</h2>
      


      <div className="item-list">
              {filteredItems.map((item) => (
                <Link to={`/item/${item.id}`} key={item.id}>
                  <Item
                    name={item.name}
                    rating={item.rating}
                    price={item.price}
                    saleDiscount={item.saleDiscount}
                    image={item.image}
                    brand={item.brand}
                  />
                </Link>
              ))}
            </div>
    </div>
  );
};

export default CategoryPage;
