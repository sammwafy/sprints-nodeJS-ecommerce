import styled from "styled-components";

export const CategoryWrapper = styled.div`

.carousel-container {
  background-color: darkgrey;
}

.react-multi-carousel-item {
  padding: 20px;
}

.carousel-slider {
  display: flex;
  align-self: flex-start;
  align-items: center;
  height: 300px;
  overflow: hidden;
}

.backG {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 200px;
  border-radius: 15px;
}
  
.react-multi-carousel-item img {
  object-fit: cover;
  max-width: 100%;
  filter: grayscale(1);
}

.react-multi-carousel-item:hover img{
  transform: scale(1.05);
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
  background-color: rgba(0, 0, 0, 1);
  border-radius: 10px;
}

.text .h3 {
  font-size: 1.1em;
}
  
`