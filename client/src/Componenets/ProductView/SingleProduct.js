import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { SingleProductWrapper } from "./styles/SingleProduct.styled";
import { Row, Col, Image,Tab,Tabs } from "react-bootstrap";


const SingleProduct = () => {
  const ProductData = {
    imgs: [
      "https://www.journal-theme.com/4/image/cache/catalog/journal3/products/fashion/d2-1100x1376h.jpg",
      "https://www.journal-theme.com/4/image/cache/catalog/journal3/products/fashion/d1-1100x1376h.jpg",
      "https://www.journal-theme.com/4/image/cache/catalog/journal3/products/fashion/additional/tee4-1100x1376h.jpg",
      "https://www.journal-theme.com/4/image/cache/catalog/journal3/products/fashion/additional/tee5-1100x1376h.jpg",
      "https://www.journal-theme.com/4/image/cache/catalog/journal3/products/fashion/b1-1100x1376h.jpg",
      "https://www.journal-theme.com/4/image/cache/catalog/journal3/products/fashion/additional/te-1100x1376h.jpg",
    ],
  };

  const [mainImg, setMainImg] = useState("");
  const [mainImgPosition, setMainImgPosition] = useState("0 0");

  const mainImgHandler = (img) => {
    setMainImg(img);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMainImgPosition(`${x}% ${y}%`);
  };
  return (
    <SingleProductWrapper>
      <Container>
        <Row>
          <Col className="leftView">
            <Row>
              <Col lg={2} className="thumbImgs">
                {ProductData?.imgs?.map((img) => (
                  <Image src={img} onClick={() => mainImgHandler(img)} />
                ))}
              </Col>
              <Col
                lg={10}
                className="mainImg"
                style={{
                  backgroundImage: `url(${mainImg})`,
                  backgroundPosition: mainImgPosition,
                }}
                onMouseMove={handleMouseMove}
              ></Col>
            </Row>
          </Col>
          <Col className="rightView">
            <Tabs
              defaultActiveKey="description"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="description" title="DESCRIPTION">
                
              </Tab>
              <Tab eventKey="specifications" title="SPECIFICATIONS">
                
              </Tab>
              <Tab eventKey="reviews" title="REVIEWS" >
                
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
