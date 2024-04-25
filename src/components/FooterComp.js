import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="footer pb-3 pt-4" id="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Healing</h3>
          </Col>
          <Col>
            <i className="fa-brands fa-facebook text-white"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">
              &copy; Copyright by Healing 2024, All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
