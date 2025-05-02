import React from "react";
import "../css/Item.css";

function Item({ name, rating, price, image, brand }) {
  
  return (
    <div className="item-card">
      <img
        className="imgaes"
        src={import.meta.env.BASE_URL + image}
        alt={"Item image"}
        width="100%"
      />
      <div className="item-brand">{brand}</div>
      <div className="item-name">{name}</div>
      <div className="item-info">
        <div className="item-price">₹{price}</div>
        <div className="item-rating">{rating}&#9733;</div>
      </div>
    </div>
  );
}

export default Item;
