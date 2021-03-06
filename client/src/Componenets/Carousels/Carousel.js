import PropTypes from "prop-types";
import BrandsCarousel from "./brands-carousel";
import FullScreenCarousel from "./fullScreen-carousel";
import TestimonialsCarousel from "./testimonials";
import CategoryCarousel from "./category-carousel";

const Carousel = ({ type, interval, items, subHeader }) => {
  switch (type) {
    case "fullscreen":
      return <FullScreenCarousel interval={interval} items={items} subHeader={subHeader} />;

    case "testimonials":
      return <TestimonialsCarousel interval={interval} items={items} />;

    case "brands":
      return <BrandsCarousel interval={interval} items={items} />;

    case "category":
      return <CategoryCarousel interval={interval} />;

    default:
      return null;
  }
};

Carousel.propTypes = {
  type: PropTypes.string,
};

export default Carousel;
