import ShopCarousel from "../Carousels/ShopCarousel.js";
import { ShopHomeWrapper } from "./styles/ShopHome.styled.js";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaBoxOpen, FaReply, FaShieldAlt, FaTruck } from "react-icons/fa";
import FeaturedCategory from "./featured/FeaturedCategory.js";
import FeaturedProducts from "./featured/FeaturedProducts.js";
import BrandsCarousel from "../Carousels/brands-carousel.js";

const ShopHome = () => {
  const CarouselItems = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
      header: "Beauty & Modern",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      header: "Classic & Elite",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      header: "New Sofa Collection",
    },
  ];

  return (
    <ShopHomeWrapper>
      <div className="d-flex">
        <Container className="carouselPart">
          <ShopCarousel items={CarouselItems} />
          <div className="d-flex flex-column">
            <div>
              <Image src="https://images.unsplash.com/photo-1611491064644-a9ff17219a53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <div className="filter"></div>
              <p>Highest Quality wood</p>
            </div>
            <div>
              <Image src="https://images.unsplash.com/photo-1640003145169-d10a2e85a64d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0dHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
              <div className="filter"></div>
              <p>Top Rated Mastress</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="miniFeaturesBar">
        <Container>
          <Row>
            <Col>
              <div className="featureIcon">
                <FaTruck />
              </div>
              <div className="d-flex flex-column">
                <h4>Free Shipping</h4>
                <p>Free delivery over $100</p>
              </div>
            </Col>
            <Col>
              <div className="featureIcon">
                <FaReply />
              </div>
              <div className="d-flex flex-column">
                <h4>Free Returns</h4>
                <p>Hassle free returns</p>
              </div>
            </Col>
            <Col>
              <div className="featureIcon">
                <FaShieldAlt />
              </div>
              <div className="d-flex flex-column">
                <h4>Secure Shopping</h4>
                <p>Best security features</p>
              </div>
            </Col>
            <Col>
              <div className="featureIcon">
                <FaBoxOpen />
              </div>
              <div className="d-flex flex-column">
                <h4>Unlimited Blocks</h4>
                <p>Any content, any page</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="featuredCat">
        <h1>Latest Products</h1>
        <Container className="FeaturedCatWrapper">
          <FeaturedProducts />
        </Container>

        <h1>Featured Category</h1>
        <Container className="FeaturedCatWrapper">
          <FeaturedCategory />
        </Container>

        <h1>Our Brands</h1>
      </div>
      <BrandsCarousel />
    </ShopHomeWrapper>
  );
};

export default ShopHome;
