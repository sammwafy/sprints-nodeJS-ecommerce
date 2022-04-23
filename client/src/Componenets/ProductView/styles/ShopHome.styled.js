import styled from "styled-components";

export const ShopHomeWrapper = styled.div`
  .carouselPart {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .shopCarousel {
      width: 67%;
      height: 460px;
    }
    .flex-column {
      width: 29%;
      justify-content: space-between;
      > div {
        overflow: hidden;
        position: relative;
        width: 320px;
        height: 220px;
        border-radius: 3%;
        background: rgb(240 242 245);
        .filter {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        &:hover .filter {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          transition: all 0.15s ease-out;
          z-index: 2;
          border-radius: inherit;
          opacity: 1;
          background: rgba(10, 55, 143, 0.3);
        }
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      p {
        z-index: 9;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        font-size: 1.4rem;
        color: white;
        font-weight: 600;
        padding: 5px 10px;
        text-shadow: 1px 1px 10px #1c1c1c;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #f1f1f1;
      }
    }
  }

  /** miniFeaturesBar */
  .miniFeaturesBar {
    background: rgb(58 71 84);
    padding: 25px 0;
    margin-top: 50px;
    .col {
      display: flex;
      .featureIcon {
        border: 2px solid rgba(13, 82, 214, 1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        margin-right: 15px;
        svg {
          color: rgb(233 102 49);
          font-size: 1.8rem;
        }
      }

      h4 {
        color: white;
        margin-bottom: 0;
      }
      p {
        color: rgba(139, 145, 152, 1);
      }
    }
  }

  .featuredCat {
    margin-top: 50px;
    padding:50px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: rgb(240 242 245);
    h1{
      padding: 15px 0;
      font-weight: 700;
    }
    .FeaturedCatWrapper {
      display: flex;
      align-items: center;
      background: white;
      padding-right: 25px;
      padding-left: 0px;
      > .card {
        width: 16%;
        height: 500px;

      }
      .card-group {
        width: 84%;
        .theCardWrapper {
          width: 21%;
          margin-left: 15px;
          height: 450px;
          .card {
            height: 450px;
          }
        }
      }
    }
  }
`;
