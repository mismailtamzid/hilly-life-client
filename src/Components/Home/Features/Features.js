import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {Row, Col, Button} from "react-bootstrap";
import SingleFeatured from "./SingleFeatured";

const LatestBlog = () => {
  const [products, setProducts] = useState([]);
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    fetch("/fakeFeatures.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTempData(data);
      });
  }, [])
  const filterProduct = (categoryItem) => {
    const updatedProducts = tempData.filter((currentElement) => {
      return currentElement.type === categoryItem;
    });
    setProducts(updatedProducts)
  }
  const sliderRef = useRef(null);
   const settings = {
      centerMode: false,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 5,
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
    <div className="container">
      <div className=" py-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <ul className="d-flex" type="none">
            <li className="me-4">
              <h2 onClick={() => setProducts(tempData)}>Featured</h2>
            </li>
            <li className="me-4">
              <h2 onClick={() => filterProduct("GRAPHIC CORNER")}>
                OnSale
              </h2>
            </li>
            <li className="me-4">
              <h2 onClick={() => filterProduct("STUDIO DESIGN")}>
                Bestseller
              </h2>
            </li>
          </ul>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: 40,
                backgroundColor: "aliceblue",
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
                backgroundColor: "aliceblue",
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
        <Row>
          <Col>
            <Slider ref={sliderRef} {...settings}>
              {products?.map((feature) => (
                <SingleFeatured
                  feature={feature}
                  key={feature.id}
                ></SingleFeatured>
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LatestBlog;
