import styled from "styled-components";

export const SingleProductWrapper = styled.div`
  /** thumbnail imgs */
  .leftView {
    .thumbImgs {
      display: flex;
      flex-direction: column;
      img {
        width: 80px;
        height: 100px;
        margin-bottom: 16px;
        border-width: 2px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 1);
        cursor: pointer;
      }
      img:hover {
        border-color: rgba(187, 198, 221, 1);
      }
    }

    .mainImg {
      overflow: hidden;
      max-width: 550px;
      cursor: zoom-in;
      background-size: cover;
      &:hover {
        background-size: unset;
      }
    }
  }
  /** right Tabs */
  .rightView {
    .nav-tabs {
      border-bottom: 1px solid rgba(221, 221, 221, 1);
      .nav-link {
        color:black;
        font-weight: 600;
        font-family: 'IBM Plex Sans';
      }
      .nav-link.active {
        border: unset;
        color:black !important;
        border-bottom: 1px solid rgba(208, 30, 36, 1) !important;
      }
      .nav-link:hover {
        color:rgba(208, 30, 36, 1);
        border: unset;
      }
    }
  }
`;
