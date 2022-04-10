import styled from "styled-components";

export const NavWrapper = styled.div`
  & {
    display: flex;
    background: rgba(238, 238, 238, 1);
    justify-content: space-around;
    padding: 15px 0;
  }

  & > .nav {
    width: 55%;
  }
  .rightBoxContent {
    width: 45%;
  }
  .navContainer {
    margin-bottom: 15px;
  }
  .navContainer > .nav-link {
    margin-right: 25px;
    width: 25%;
  }
  .navContainer > .nav-link .sub-item {
    padding: 0.1rem 0.3rem;
    font-size: 0.7rem;
    color: rgba(114, 118, 132, 1);
    white-space: nowrap;
  }
  .navContainer > .nav-link .sub-item:hover,
  .navContainer > .nav-link .sub-item:hover > svg {
    color: rgba(208, 30, 36, 1);
  }
  .navContainer > .nav-link .sub-item > svg {
    color: #3b8aff;
    padding-right: 5px;
  }
  .navContainer > .nav-link h3 {
    font-size: 0.8rem;
    color: rgba(41, 41, 43, 1);
  }

  .imgBox {
    border-left: 1px solid #d5d5d5;
    padding-left: 15px;
  }
  .imgBox img {
    transform: scale(1);
    transition: transform 0.2s;
    width: 100%;
  }
  .imgBox img:hover {
    transform: scale(1.16);
  }
  .imgBox > .d-flex > div {
    max-width: 50%;
    overflow: hidden;
  }
  .headerImgCTA {
    position: relative;
    overflow: hidden;
    border-left: 1px solid #d5d5d5;
    padding-left: 15px;
    margin-right: 10px;
    height: fit-content;
  }
  .headerImgCTA img {
    width: 100%;
  }
  .headerImgCTA .filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 15px;
  }
  .headerImgCTA:hover .filter {
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
  .headerImgCTA svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.8rem;
    z-index: 9;
  }

  /** small laptops up to 13 inch */
  @media screen and (min-width: 812px) and (max-width: 1336px) {
    .navContainer > .nav-link {
      margin-right: 0px;
    }
  }

  /** tablet */
  @media screen and (max-width: 812px) {
    & {
      flex-direction: column;
    }
    & .nav {
      width: 100%;
    }
    .rightBoxContent {
      width: 100%;
      margin: 50px 0;
    }
    .imgBox,
    .headerImgCTA {
      border-left: unset;
    }
    .navContainer > .nav-link {
      margin-right: 12px;
    }
    .navContainer > .nav-link .sub-item{
      font-size: .9rem;
    }
  }

  /** mobile > changed to max 550 instead of fixing the overflow (better solution)*/
  @media screen and (max-width: 550px) {
    .rightBoxContent {
      display: none !important;
    }
    & > .nav {
      width: 100%;
    }
    .navContainer {
      flex-wrap: wrap;
      max-width: 100%;
      padding-left: 20px;
    }
    .navContainer > .nav-link {
      margin-right: unset;
      padding: 25px 1rem;
      width: calc(50% - 0.01px);
    }
    .navContainer > .nav-link h3 {
      font-size: 1rem;
    }
    .navContainer > .nav-link .sub-item {
      white-space: unset;
      font-size: 1rem;
    }
  }


  /** very small mobile */
  @media screen and (max-width: 320px) {
    .navContainer > .nav-link {
      margin-left: 10px;
      padding: 25px 0.2rem;
      width: calc(50% - 20px);
    }
    .navContainer > .nav-link h3 {
      font-size: .9rem;
    }
    .navContainer > .nav-link .sub-item {
      font-size: .7rem;
    }
  }
`;
