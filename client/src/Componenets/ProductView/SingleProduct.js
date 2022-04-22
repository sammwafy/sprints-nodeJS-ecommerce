import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { SingleProductWrapper } from "./styles/SingleProduct.styled";
import { Row, Col, Image, Tab, Tabs } from "react-bootstrap";
import axios from "../../Hooks/axios.js";

import Description from "./productItems/Description";
import ProductImgs from "./productItems/ProductImgs.js";
import Specs from "./productItems/Specs.js";
import ProductTitle from "./productItems/ProductTitle.js";
import Review from "./Reviews/Review.js";

const SingleProduct = () => {
  const [product, setProduct] = useState({});


  const productId = "62611311d23d2e0dfa47cb31";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/find/${productId}`);
        console.log(res?.data)
        setProduct(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);


  console.log(product);
  return (
    <SingleProductWrapper>
      <ProductTitle title={product?.title} />
      <Container>
        {product && (
          <Row>
            <Col className="leftView">
              <ProductImgs
                mainImg={product?.featuredImg}
                imgs={product?.image}
              />
            </Col>
            <Col className="rightView">
              <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="description" title="DESCRIPTION">
                  <Description
                    data={{
                      price: product?.price,
                      description: product?.description,
                      quantity: product?.quantity,
                      category: 'sofa'
                    }}
                  />
                </Tab>
                <Tab eventKey="specifications" title="SPECIFICATIONS">
                  <Specs data={{
                    size: product?.size,
                    color: product?.color

                  }} />
                </Tab>
                <Tab eventKey="reviews" title="REVIEWS">
                  <Review/>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        )}
      </Container>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
