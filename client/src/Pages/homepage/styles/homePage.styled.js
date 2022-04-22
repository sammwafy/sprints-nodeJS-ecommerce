import styled from "styled-components";

export const TestimonialsContainter = styled.div`
  min-height: 400px;
  display: flex;
  background: #f6f5f8;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  background-image: url('https://www.journal-theme.com/4/image/cache/catalog/journal3/people/demo21-1499x1000.jpg.webp');
  background-attachment: fixed;
  background-size: cover;

  /** tablet */
  @media screen and (max-width: 768px) {
    padding-left: unset;
  }

  /** mobile */
  @media screen and (max-width:482px){
    &{
      background:rgb(246, 245, 248);
      padding-left: 15px;
      padding-right: 15px;
      height: 500px;
      display: flex;
      align-items: center;
    }
    .carousel-item{
      text-align:left;
    }
    .slide-bottom{
      text-align:center
    }
  }
`
