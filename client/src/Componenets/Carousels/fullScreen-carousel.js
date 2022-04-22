import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { FullScreenWrapper } from "./styles/fullscreen.styled";

const FullScreenCarousel = ({ items, interval,subHeader }) => {
  return (
    <FullScreenWrapper style={subHeader && {height: '90vh'}}>
      <Carousel interval={interval} controls={false}>
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
                <p className="slide-bottom">{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </FullScreenWrapper>
  );
};

FullScreenCarousel.propTypes = {
  items: PropTypes.array,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
};

export default FullScreenCarousel;
