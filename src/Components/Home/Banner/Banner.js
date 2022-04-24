import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import img1 from "./../../../Assets/images/forestbanner.jpg";
import img2 from "./../../../Assets/images/forestbanner2.jpg";
import Slider from "react-slick";


const Banner = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
   };
  return (
    <div>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="banner1">
            <div className="container banner">
              <div>
                <h5>USE CODE WEEKEND37</h5>
                <h1>
                  Just Got Bigger <br /> Car Parts Online
                </h1>
                <h5>Excludes Perfomance Parts, Garage Equipment</h5>
                <Button variant="warning">SHOP NOW</Button>
              </div>
            </div>
          </div>
          <div className="banner2">
            <div className="container banner">
              <div>
                {" "}
                <h5> RESTART YOUR HEART</h5>
                <h1>
                  {" "}
                  New Renault <br /> Capture Life
                </h1>
                <h5>Renault Megane The Everyday Race</h5>{" "}
                <Button variant="warning">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;