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
    @media screen and (max-width: 1045px) {
      margin: 0;
    }
    @media screen and (max-width: 792px) {
      margin: 0;
      > .flex-column {
        width: 44%;
      }
      .shopCarousel {
        width: 54%;
      }
    }
    @media screen and (max-width: 482px) {
      flex-direction: column;
      .shopCarousel {
        width: 100%;
        margin-bottom: 15px;
      }
      > .flex-column {
        display: none !important;
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
    @media screen and (max-width: 792px) {
      .col {
        min-width: 50%;
        margin-bottom: 25px;
      }
    }

    @media screen and (max-width: 482px) {
      .col {
        h4 {
          font-size: 1.2rem;
        }
        .featureIcon {
          width: 50px;
          height: 45px;
        }
        .featureIcon svg {
          font-size: 1.38rem;
        }
      }
    }
  }

  .featuredCat {
    margin-top: 50px;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: rgb(240 242 245);
    h1 {
      position: relative;
      padding: 0;
      margin: 0;
      font-family: "Raleway", sans-serif;
      font-weight: 300;
      font-size: 40px;
      color: #080808;
      -webkit-transition: all 0.4s ease 0s;
      -o-transition: all 0.4s ease 0s;
      transition: all 0.4s ease 0s;
      text-align: center;
      text-transform: uppercase;
      padding-bottom: 5px;
      margin: 50px 0;
    }

    h1:before {
      width: 28px;
      height: 5px;
      display: block;
      content: "";
      position: absolute;
      bottom: 3px;
      left: 50%;
      margin-left: -14px;
      background-color: #b80000;
    }
    h1:after {
      width: 100px;
      height: 1px;
      display: block;
      content: "";
      position: relative;
      margin-top: 25px;
      left: 50%;
      margin-left: -50px;
      background-color: #b80000;
    }

    .FeaturedCatWrapper {
      display: flex;
      align-items: center;
      background: white;
      padding-right: 25px;
      padding-left: 0px;
      margin-bottom: 50px;

      > .card {
        width: 22%;
        height: 500px;
      }
      @media screen and (max-width: 792px) {
        flex-direction: column;
        padding: 10px 30px;
        > .card {
          width: 80%;
          max-height: 420px;
          margin-bottom: 15px;
          img {
            height: 290px;
          }
        }
      }

      @media screen and (max-width: 482px) {
        flex-direction: column;
        padding: 0px 10px;
        > .card {
          width: 100%;
          max-height: 390px;
          margin-bottom: 15px;
          img {
            height: 200px;
          }
        }
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
