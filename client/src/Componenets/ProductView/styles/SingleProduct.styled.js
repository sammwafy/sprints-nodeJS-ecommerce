import styled from "styled-components";

export const SingleProductWrapper = styled.div`
  > .container {
    padding: 40px 0;
  }
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
      height: 560px;
      background-size: cover;
      &:hover {
        background-size: unset;
      }
    }
  }
  /** right Tabs */
  .rightView {
    margin-left: 25px;
    padding-left: 25px;
    border-left: 1px solid rgba(221, 221, 221, 1);

    .nav-tabs {
      border-bottom: 1px solid rgba(221, 221, 221, 1);
      .nav-link {
        color: black;
        font-weight: 600;
        font-family: "IBM Plex Sans";
      }
      .nav-link.active {
        border: unset;
        color: black !important;
        border-bottom: 1px solid rgba(208, 30, 36, 1) !important;
      }
      .nav-link:hover {
        color: rgba(208, 30, 36, 1);
        border: unset;
      }
    }
  }

  /** product description */
  .productDesc {
    .price {
      font-size: 40px;
      font-weight: 700;
    }
    .react-rater {
      margin: 12px 0;
      .react-rater-star {
        font-size: 2rem;
      }
      .react-rater-star.is-active {
        color: #f5ad1e;
      }
    }

    .add-to-cart {
      display: flex;

      .incremental {
        display: flex;
        max-width: 80px;
        button {
          padding: 0 5px;
          border-radius: unset;
          border: 1px solid #ced4da;
          margin-left: -2px;
        }
      }

      > button {
        margin: 0 10px;
        svg {
          margin-right: 8px;
        }
      }
      .btn-dark:hover {
        background: rgba(208, 30, 36, 1);
      }
      .btn-success:hover {
        background: rgba(95, 123, 177, 1) !important;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    > p {
      margin: 26px 0;
    }

    .inStock {
      color: green;
    }
    .outStock {
      color: red;
    }
  }

  /** Review */
  .reviews {
    .userInfo {
      display: flex;
      align-items: center;
      svg {
        width: 50px;
        border-radius: 50%;
      }
      h3 {
        font-size: 1.2rem;
        margin-left: 10px;
      }
    }
    .react-rater {
      margin: 6px 0;
      .react-rater-star.is-active,
      .react-rater-star.will-be-active {
        color: #f5ad1e;
      }
    }
  }
  /** new Review form */
  .newReview {
    .react-rater {
      .react-rater-star {
        font-size: 2rem;
      }
    }
  }
`;
