import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { ShopCarouselWrapper } from "./styles/shopCarousel.styled.js";

const ShopCarousel = ({ items, interval,subHeader }) => {
  return (
    <ShopCarouselWrapper style={subHeader && {height: '90vh'}} className="shopCarousel">
      <Carousel interval={interval} controls={false} slide>
        {items &&
          items.map((item) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.imgSrc}
                alt="Two"
              />
              <Carousel.Caption>
                <h3 className="slide-top">{item.header}</h3>

              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </ShopCarouselWrapper>
  );
};

ShopCarousel.propTypes = {
  items: PropTypes.array,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
};

export default ShopCarousel;
