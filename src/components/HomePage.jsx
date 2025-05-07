import React from "react";
import items from "../mockData/items.json";
import ItemList from "./ItemList";
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel"
import Testimonials from "./Testimonials";

function HomePage() {
  return (
    <section>

      <HomeCarousel/>
      <ItemList  />
      <Testimonials />
      <Footer />

    </section>
  );
}

export default HomePage;
