import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { SingleProductWrapper } from "./styles/SingleProduct.styled";
import { Row, Col, Image, Tab, Tabs } from "react-bootstrap";
import axios from "../../Hooks/axios.js";
import Layout from "../../Componenets/Layout/Layout";

import Description from "./productItems/Description";
import ProductImgs from "./productItems/ProductImgs.js";
import Specs from "./productItems/Specs.js";
import ProductTitle from "./productItems/ProductTitle.js";
import Review from "./Reviews/Review.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = id;
  const productRef = useRef();

  useLayoutEffect(() => {
    productRef?.current?.focus();
  }, [location.pathname]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/find/${productId}`);
        console.log(res?.data);

        setProduct(res?.data);
      } catch (err) {
        console.log(err);
        navigate("/404", { state: { product: true } });
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await axios.post(`/api/products/average/${productId}`);
        console.log(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, []);

  console.log(product);
  return (
    <SingleProductWrapper>
      <Layout>
        <div tabIndex="0" id="focus" ref={productRef}></div>
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
                        category: "sofa",
                        id: product._id
                      }}
                    />
                  </Tab>
                  <Tab eventKey="specifications" title="SPECIFICATIONS">
                    <Specs
                      data={{
                        size: product?.size,
                        color: product?.color,
                      }}
                    />
                  </Tab>
                  <Tab eventKey="reviews" title="REVIEWS">
                    <Review />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          )}
        </Container>
      </Layout>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
