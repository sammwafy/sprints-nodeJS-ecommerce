import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Image from "react-bootstrap/Image";
import { CategoryWrapper } from "./styles/category-carousel.styled";


const CategoryCarousel = ({ interval }) => {
   const images = [
      { name: "Furniture", imgSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" },
      { name: "Lighting", imgSrc: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" },
      { name: "Decoration", imgSrc: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" },
      { name: "Rugs, mats & flooring", imgSrc: "https://images.unsplash.com/photo-1562582664-8a8803c031ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" },
      { name: "Working from home", imgSrc: "https://images.unsplash.com/photo-1616531770192-6eaea74c2456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" },
      { name: "Kitchen & appliances", imgSrc: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2768&q=80" },
      { name: "Outdoor", imgSrc: "https://images.unsplash.com/photo-1499803270242-467f7311582d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80" },
      { name: "BABY & KIDS", imgSrc: "https://images.unsplash.com/photo-1525956180549-4d511fd16335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" }
   ];

   const deviceType = "desktop";

   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1366 },
         items: 3,
         paritialVisibilityGutter: 60,
      },
      laptop: {
         breakpoint: { max: 1366, min: 768 },
         items: 2,
         paritialVisibilityGutter: 20,
      },
      tablet: {
         breakpoint: { max: 768, min: 576 },
         items: 2,
         paritialVisibilityGutter: 20,
      },
      mobile: {
         breakpoint: { max: 576, min: 0 },
         items: 1,
         paritialVisibilityGutter: 15,
      },
   };

   return (
      <CategoryWrapper>
         <Carousel
            partialVisbile
            variant="dark"
            deviceType={deviceType}
            responsive={responsive}
            interval={interval}
            sliderClass="carousel-slider"
            containerClass="carousel-container"
         >
            {images.slice().map((item, i) => {
               return (
                  <a href="#" key={i}>
                     <div className="hoverEffect">
                        <div className="backG">
                           <Image draggable={false} src={item.imgSrc} />
                        </div>
                        <div className="text">
                           <h3 className="m-0 h3">{item.name}</h3>
                        </div>
                     </div>
                  </a>
               )
            })}
         </Carousel>
      </CategoryWrapper>
   );
}

export default CategoryCarousel;