import React from "react";
import items from "../mockData/items.json";
import ItemList from "./ItemList";
import Footer from "./Footer";

function HomePage() {
  return (
    <section>
      <ItemList items={items} />
      <Footer />

    </section>
  );
}

export default HomePage;
