import React from "react";
import { Image } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import why1 from "../../Assets/imgs/why1.svg";
import why2 from "../../Assets/imgs/why2.svg";
import why3 from "../../Assets/imgs/why3.svg";
import why4 from "../../Assets/imgs/why4.svg";

const WhyUs = () => {
  return (
    <WhyUsWrapper>
      <Container>
        <h1>Why Choose Us</h1>
        <Row className="whyRow">
          <Col className="whyIMG">
            <Image src={why1} />
          </Col>
          <Col>
            <p>Affordable furniture with the best material quality</p>
          </Col>
        </Row>

        <Row className="whyRow flex-row-reverse">
          <Col className="whyIMG">
            <Image src={why2} />
          </Col>
          <Col>
            <p> Superior logistics system we deliver anywhere </p>
          </Col>
        </Row>

        <Row className="whyRow">
          <Col className="whyIMG">
            <Image src={why3} />
          </Col>
          <Col>
            <p>Dream home inspiration, it's a big studio</p>
          </Col>
        </Row>

        <Row className="whyRow flex-row-reverse">
          <Col className="whyIMG">
            <Image src={why4} />
          </Col>
          <Col>
            <p> Top furniture designers work with us </p>
          </Col>
        </Row>
      </Container>
    </WhyUsWrapper>
  );
};

const WhyUsWrapper = styled.div`
  display: block;
  hr {
    max-width: 50%;
    display: block;
    margin: 15px auto;
  }
  .container {
    padding: 20px;
    // border: 1px solid #d5d5d5;
    border-radius: 12px;
    text-align: center;
    margin: 45px auto;

    h1 {
      position: relative;
      padding: 0;
      margin: 0;
      font-family: "Raleway", sans-serif;
      font-weight: 300;
      font-size: 40px;
      color: #080808;
      -webkit-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
      text-align: center;
      text-transform: uppercase;
      padding-bottom: 5px;
      margin: 50px 0;
    }

    h1:before {
      width: 28px;
      height: 5px;
      display: block;
      content: "";
      position: absolute;
      bottom: 3px;
      left: 50%;
      margin-left: -14px;
      background-color: #b80000;
    }
    h1:after {
      width: 100px;
      height: 1px;
      display: block;
      content: "";
      position: relative;
      margin-top: 25px;
      left: 50%;
      margin-left: -50px;
      background-color: #b80000;
    }
  }
  .whyRow {
    margin: 50px auto;
    justify-content: center;
    flex-wrap: nowrap;
    .col {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      font-size: 1.4rem;
      font-weight: 600;
      white-space: nowrap;
      @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
        white-space: unset;
      }
    }
  }
  .whyIMG {
    img {
      width: 520px;
    }
  }

  @media screen and (max-width: 776px) {
    .flex-row-reverse {
      flex-direction: row !important;
    }
    .whyRow {
      flex-direction: column !important;
      .col {
        font-size: 1.3rem;
        white-space: unset;
        padding: 25px 0;
      }
    }
  }
`;

export default WhyUs;
