import styled from "styled-components";

export const CategoryWrapper = styled.div`
  
  align-items: center;
  height: 300px;

  .backG {
   position: relative;
  text-align: center;
  }

  .mask {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: rgba(0, 0, 0, 0.6);
   width: 100%;
   height: 100%;
  }
  .text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5em;
  padding: 20px 20px 20px 20px;
  margin: 0 0 0 0;
  background-color: rgba(0, 0, 0, 1);

  }

  .react-multi-carousel-item {
  padding: 20px 0 20px 20px;
}
.react-multi-carousel-item img {
  width: 90px;
  height: 70px;
  opacity: .3;
  filter: grayscale(1);
}

.react-multi-carousel-item:hover img{
  transform: scale(1.15);
  filter: grayscale(0);
  opacity: 1;
}

  .carousel-item img {
    object-fit: cover;
  }
  
  .carousel.slide {
    display: flex;
    align-self: flex-start;
    align-items: center;
    /* max-width: 545px; */
    background: white;
    padding: 15px 65px;
    height: 300px;
    box-shadow: 0 5px 30px -5px rgb(0 0 0 / 15%);
    overflow: hidden;
  }
  .carousel-indicators {
    bottom: -50px;
  }

  .carousel-item {
    text-align: center;
  }

  .carousel-item img {
   height: 100%;
    object-fit: cover;
  }

  .carousel-control-prev {
    justify-content: flex-start;
  }
  .carousel-control-next {
    justify-content: flex-end;
  }
`