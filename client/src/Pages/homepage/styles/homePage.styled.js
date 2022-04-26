import styled from "styled-components";

export const TestimonialsContainter = styled.div`
  min-height: 400px;
  display: flex;
  background: #f6f5f8;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  background-image: url("https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  background-attachment: fixed;
  background-size: cover;

  /** tablet */
  @media screen and (max-width: 768px) {
    padding-left: unset;
  }

  /** mobile */
  @media screen and (max-width: 482px) {
    & {
      background: rgb(246, 245, 248);
      padding-left: 15px;
      padding-right: 15px;
      height: 500px;
      display: flex;
      align-items: center;
    }
    .carousel-item {
      text-align: left;
    }
    .slide-bottom {
      text-align: center;
    }
  }
`;
