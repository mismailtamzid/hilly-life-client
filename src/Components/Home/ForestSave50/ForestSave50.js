import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from "./../../../Assets/images/forestsave50-1.jpg";
import img2 from "./../../../Assets/images/forestsave50-2.jpg";

const ForestSave50 = () => {
    return (
      <div className="container">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div className="hidden">
              <img src={img1} className=" img mw-100" alt="" />
            </div>
          </Col>
          <Col>
            <div className="hidden">
              {" "}
              <img src={img2} className=" img mw-100" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default ForestSave50;