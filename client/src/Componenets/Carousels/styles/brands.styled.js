import styled from "styled-components";

export const BrandsWrapper = styled.div`

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

@media screen and (max-width:482px){
  .react-multi-carousel-item img {
    width: 65px;
    height: 58px;
  }
  .react-multiple-carousel__arrow{
    display: none;
  }
}
`