import styled from "styled-components";

export const CategoryWrapper = styled.div`

.carousel-container {
  background-color: rgb(41,41,43);
  padding-top: 30px;
  padding-bottom: 30px;
}

.react-multi-carousel-item {
  padding-left: 20px;
  padding-right: 20px;
}

.carousel-slider {
  display: flex;
  align-self: flex-start;
  align-items: center;
  overflow: hidden;
}

.backG {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 40vh;
}
  
.react-multi-carousel-item img {
  object-fit: cover;
  max-width: 100%;
  filter: grayscale(1);
  transform: scale(1.2);
  transition: all .2s ease;
  background-color: rgba(0, 0, 0, 1);
}

.react-multi-carousel-item:hover img{
  transform: scale(1.3);
  filter: grayscale(0);
  transition: all .2s ease;
}

.hoverEffect {
  background-color: rgba(0, 0, 0, 1);
  &:hover {
    background-color: crimson;
  }
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 20px 20px 20px 20px;
  margin: 0 0 0 0;
  border-radius: 10px;
  background-color: inherit;
}

.text .h3 {
  font-size: 1.1em;
}

`