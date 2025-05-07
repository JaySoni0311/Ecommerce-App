import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/HomeCarousel.css"; // We'll create this CSS next

const HomeCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={800}
      >
        <div>
          <img src="./assets/images/blueshirt.jpg" alt="Banner 1" />
         <Link to={`/category/Men`}> <p className="legend">Explore Men's Collection</p></Link>
        </div>
        <div>
          <img src="./assets/images/redtshirt.jpg" alt="Banner 2" />
         <Link to={`/category/Women`}> <p className="legend" >New Arrivals - Women</p> </Link>
        </div>
        <div>
          <img src="./assets/images/dress2.jpg" alt="Banner 3" />
        <Link  to={`/category/Accessories`}>  <p className="legend">Trendy Accessories</p> </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
