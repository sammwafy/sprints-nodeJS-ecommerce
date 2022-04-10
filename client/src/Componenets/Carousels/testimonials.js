import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { TestimonialWrapper } from "./styles/testimonial.styled";

const TestimonialsCarousel = ({ items, interval }) => {
  return (
    <TestimonialWrapper>
       <h5>WHAT OUR CUSTOMERS SAY</h5>
      <Carousel interval={interval} variant="dark">
        {items &&
          items.map((item) => (
            <Carousel.Item>
              <p className="slide-top">{item.text}</p>
              <h5 className="slide-bottom">{item.author}</h5>
            </Carousel.Item>
          ))}
      </Carousel>
    </TestimonialWrapper>
  );
};

TestimonialsCarousel.propTypes = {
  items: PropTypes.array,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
};

export default TestimonialsCarousel;
