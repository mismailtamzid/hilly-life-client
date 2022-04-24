import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStar, BsStarFill, BsCurrencyEuro } from "react-icons/bs";


const SingleFeatured = ({ feature }) => {
  // console.log(pd);
  return (
    <>
      <div
        className="m-2"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Col>
          <Card style={{ height: "500px" }}>
            <div className="">
              <Card.Link href="/singleFeatured" className="featuredHoverLink">
                <Card.Img
                  variant="top"
                  className="featuredImage img-fluid"
                  src={feature?.img}
                />
              </Card.Link>
              <Card.Body>
                <Card.Text>{feature?.type}</Card.Text>
                <Card.Title
                  className="overflow-hidden"
                  style={{
                    height: "35px",
                    width: "220px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {feature?.name}
                </Card.Title>
                <Card.Text>
                  <BsCurrencyEuro /> {feature?.price}
                </Card.Text>
                <Card.Text>
                  <BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" />
                  <BsStarFill className="text-warning" />
                  <BsStar />
                </Card.Text>
                <Card.Text>
                  <Button>Add To Cart</Button>
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default SingleFeatured;
