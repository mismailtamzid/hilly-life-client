import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Row, Col, Button } from "react-bootstrap";
import SinglePopular from "./SinglePopular";

const Popular = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/fakeFeatures.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const sliderRef = useRef(null);
  const settings = {
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1223,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="popular py-5">
      <div className="container ">
        <div className=" py-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <ul className="d-flex text-light" type="none">
              <li>
                <h2>Popular Categories</h2>
              </li>
            </ul>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: 40,
                  backgroundColor: "white",
                  color: "black",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderRadius: 20,
                  boxShadow: "0 1px 3px rgb(0 0 0 /10%)",
                  cursor: "pointer",
                }}
                onClick={() => sliderRef.current.slickPrev()}
              >
                <IoIosArrowBack />
              </div>
              <div
                style={{
                  width: 40,
                  backgroundColor: "white",
                  color: "black",
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderRadius: 20,
                  boxShadow: "0 1px 3px rgb(0 0 0 /10%)",
                  cursor: "pointer",
                }}
                onClick={() => sliderRef.current.slickNext()}
              >
                {" "}
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <Row className="text-light bg-light ">
            <Col>
              <Slider ref={sliderRef} {...settings}>
                {products?.slice(5, 14).map((product) => (
                  <SinglePopular
                    product={product}
                    key={product.id}
                  ></SinglePopular>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Popular;
