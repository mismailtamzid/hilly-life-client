import React from 'react';
import Slider from "react-slick";

const Sponcor = () => {
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 5,
       slidesToScroll: 1,
     };
    return (
      <div className="my-5 container  shadow">
        
          <Slider {...settings}>
            <div>
              <h3>
                <img
                  src="http://demo.posthemes.com/pos_ecolife_autopart/autopart3/img/blocklogo/1.jpg"
                  alt=""
                />
              </h3>
            </div>
            <div>
              <img
                src="http://demo.posthemes.com/pos_ecolife_autopart/autopart3/img/blocklogo/2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="http://demo.posthemes.com/pos_ecolife_autopart/autopart3/img/blocklogo/3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="http://demo.posthemes.com/pos_ecolife_autopart/autopart3/img/blocklogo/4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="http://demo.posthemes.com/pos_ecolife_autopart/autopart3/img/blocklogo/5.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="http://demo.posthemes.com/pos_ecolife_autopart/autopart3/img/blocklogo/6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="http://demo.posthemes.com/pos_ecolife_autopart/autopart3/img/blocklogo/7.jpg"
                alt=""
              />
            </div>
          </Slider>
      </div>
    );
};

export default Sponcor;