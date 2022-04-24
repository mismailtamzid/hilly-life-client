import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleRecommended = ({ product }) => {
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
          <div
            class="border-bottom border-end m-0 p-0 mb-3 "
            style={{ maxWidth: "540px" }}
          >
            <div class="row g-0 d-flex align-items-center m-0 p-0npm">
              <div class="col-md-4">
                <img
                  src={product.img}
                  class="img-fluid rounded-start m-0 p-0 popularImage"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-start">
                  <h5 class="card-title">Auto Parts</h5>
                  <p class="card-text my-0 py-0 popularText popularHover">
                    Engine Systems
                  </p>
                  <p class="card-text my-0 py-0  popularText popularHover">
                    Body Systems
                  </p>
                  <p class="card-text my-0 py-0  popularText popularHover">
                    Power-Transmission Systems
                  </p>
                  <p class="card-text my-0 py-0  popularText popularHover">
                    Vehicle Parts Manufacturing
                  </p>
                  <h6 className="card-text pt-3 text-end popularText">
                    VIEW MORE...
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default SingleRecommended;
