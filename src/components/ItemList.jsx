import React from "react";
import Item from "./Item";
import "../css/ItemList.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ItemList({ items }) {
  const { selectedGender } = useContext(GlobalContext);

  const filteredItems = selectedGender
    ? items.filter((item) => item.gender === selectedGender) // Filter by gender
    : items; // Show all items when selectedGender is null

  const showBackButton = selectedGender === "Men" || selectedGender === "Women";
  return (
    <>
      <div className="back-btn">{showBackButton && <a href="/eSTORE" > &#8592; Back</a>}</div>
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
    </>
  );
}

export default ItemList;
