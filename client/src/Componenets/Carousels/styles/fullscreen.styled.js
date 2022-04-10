import styled from "styled-components";

// by using this we get the actual height of the browser window + supporting i.e

/**  let height = isNaN(window.innerHeight)
     ? window.clientHeight
     : window.innerHeight;
     then in styled componenet css
     height: calc(${height}px * 0.8);
*/
export const FullScreenWrapper = styled.div`
  display: block;
  width: 100%;
  height: 80vh;
  .carousel.slide,
  .carousel-inner,
  .carousel-item,
  .carousel-item img {
    height: 100%;
  }
  .carousel-item img {
    object-fit: cover;
  }
  .carousel-caption {
    top: 50%;
    transform: translateY(-50%);
  }
  .carousel-caption h3 {
    font-size: 6rem;
    color: white;
    text-shadow: 2px 2px 5px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ededed;
  }
  .carousel-caption p {
    font-size: 1.8rem;
    color: white;
    text-shadow: 2px 2px 5px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ededed;
  }
  .carousel-indicators {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
  }
  .carousel.slide:hover .carousel-indicators {
    visibility: visible;
    opacity: 1;
  }
  .carousel-indicators button {
    background: rgba(41, 41, 43, 1);
    background-clip: padding-box;
    height: 4px;
    opacity: 1;
  }
  .carousel-indicators button:hover,
  .carousel-indicators .active {
    background: rgba(208, 30, 36, 1);
    background-clip: padding-box;
  }

  .slide-bottom {
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  .slide-top {
    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }
  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }
  @media screen and (max-width: 482px){
    .carousel-caption h3{
      font-size: 3.7rem;
    }
  }
`;
