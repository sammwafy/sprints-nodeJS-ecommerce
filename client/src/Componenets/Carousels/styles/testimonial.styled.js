import styled from "styled-components";

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  & > h5 {
    font-size: 0.8rem;
    font-weight: 600;
    text-align: left;
    align-self: flex-start;
    padding: 15px 0;
  }
  & > h5:after {
    content: "";
    display: block;
    position: relative;
    margin-top: 8px;
    left: initial;
    right: initial;
    margin-left: 0;
    margin-right: auto;
    transform: none;
    width: 50px;
    height: 1px;
    background: rgba(208, 30, 36, 1);
  }
  .carousel.slide {
    display: flex;
    align-self: flex-start;
    align-items: center;
    max-width: 545px;
    background: white;
    padding: 15px 65px;
    height: 195px;
    box-shadow: 0 5px 30px -5px rgb(0 0 0 / 15%);
  }
  .carousel-indicators {
    bottom: -50px;
  }

  .carousel-item {
    text-align: center;
  }
  .carousel-control-prev {
    justify-content: flex-start;
  }
  .carousel-control-next {
    justify-content: flex-end;
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
    width: 20px;
    opacity: 1;
  }
  .carousel-indicators button:hover,
  .carousel-indicators .active {
    background: rgba(208, 30, 36, 1);
    background-clip: padding-box;
  }
  .carousel-dark .carousel-control-next-icon {
    color: rgba(208, 30, 36, 1);
  }

  .carousel-control-next-icon:hover {
    filter: unset;
    background-image: unset;
    background-color: rgba(208, 30, 36, 1);
    mask-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e");
    -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e");
  }

  .carousel-control-prev-icon:hover {
    filter: unset;
    background-image: unset;
    background-color: rgba(208, 30, 36, 1);
    mask-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e");
    -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e");
  }
  /** tablet */
  @media screen and (max-width: 768px) {
    & > h5 {
      font-size: 1.2rem;
    }
    .carousel.slide {
      align-self: center;
      max-width: unset;
    }
    .carousel.slide .carousel-indicators {
      visibility: visible;
      opacity: 1;
    }
  }

  /** mobile */
  @media screen and (max-width: 482px) {
    & {
      height: unset;
    }
    .carousel.slide {
      height: 320px;
      padding: 15px 30px;
    }
    .carousel-control-prev,
    .carousel-control-next{
      display: none;
    }
  }
`;
