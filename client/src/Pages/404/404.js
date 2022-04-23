import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../Componenets/Layout/Layout.js";

const ErrorPage = () => {
  const location = useLocation();

  return (
    <ErrorPageWrapper>
      <Layout>
        <div className="cardMSG">
          <Container className="msgContainer">
            <Row>
              <Col>
                {location?.state?.unauthorized ? (
                  <>
                    <h1>Restricted</h1>
                    <h3>Sorry, You Are Not Authorized</h3>
                    <p>You cannot access this page.</p>
                    <Button href="/">Go To Home</Button>
                  </>
                ) : location?.state?.product ? (
                  <>
                    <h1>404</h1>
                    <h3>Sorry, Product Page doesn't exist</h3>
                    <p>The product page you requested cannot be found</p>
                    <Button href="/shop">Go To Shop</Button>
                  </>
                ) : (
                  <>
                    <h1>404</h1>
                    <h3>Sorry, Page Not Found</h3>
                    <p>The page you requested cannot be found.</p>
                    <Button href={location?.state?.from?.pathname}>
                      Go To Previos Page
                    </Button>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </ErrorPageWrapper>
  );
};
const ErrorPageWrapper = styled.div`
  .cardMSG {
    display: block;
    padding: 50px 0;
    background: #9633ff;
  }
  .msgContainer {
    width: calc(100vw / 2.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin: 50px auto;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    padding: 15px 5.4rem;
    font-weight: 600;
    font-size: 1.8rem;
    text-align: center;
    h1 {
      font-size: 6.6rem;
      color: #2aa72a;
    }
    @media screen and (max-width: 482px) {
      width: 90vw;
      padding: 15px 1.4rem;
      font-size: 1.2rem;
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export default ErrorPage;
