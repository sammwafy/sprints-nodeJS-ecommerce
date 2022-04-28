/** @format */

import styled from "styled-components";

export const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 15px 20px;

  .leftTopNav ul {
    display: flex;
    padding: 0;


  }
  .leftTopNav ul a {
    text-decoration: none;
    color: #212529;
    @media screen and (max-width: 482px){
       li {
        display:none;
      }
    }
  }

  .leftTopNav ul a:hover {
    color: #0d6efd;
  }
  & > div {
    width: 33.3%;
  }

  .leftTopNav ul li {
    list-style-type: none;
    margin-right: 15px;
    font-size: 0.8rem;
    white-space: nowrap;
  }

  .middleTopNav {
    display: flex;
    justify-content: center;
    margin-top: -1rem;
    img {
      width: 120px;
    }
    

    @media screen and (max-width: 482px) {
      margin-top: -0.3rem;
      margin-left: -1rem;
      img {
        width: 90px;
      }
    }
  }

  .rightTopNav {
    display: flex;
    justify-content: flex-end;
  }

  .rightTopNav ul {
    display: flex;
    padding: 0;
    align-items: center;
  }
  .rightTopNav ul li {
    list-style-type: none;
    margin-right: 15px;
    font-size: 0.8rem;
    padding-bottom: 5px;
    @media screen and(max-width: 482px){
      margin-right: 7px;
    }
  }
  .rightTopNav .helloMSG {
    font-size: 1rem;
    font-weight: 600;
    span {
      color: rgba(208, 30, 36, 1);
    }
   
    @media screen and (max-width:482px){
      text-align: center;
      padding-top: 15px;
    }
  }
  .search {
    margin-bottom: -10px;
  }
  .rightTopNav ul .badgeContainer {
    position: relative;
  }
  .rightTopNav ul .badgeContainer .badge {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-weight: bold;
    position: absolute;
    top: -5px;
    right: -8px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .signInIconOnly {
    display: none;
  }

  /** small laptops up to 13 inch */
  @media screen and (min-width: 1024px) and (max-width: 1336px) {
    & {
      padding: 8px 20px;
    }
  }

  /** mobile */
  @media screen and (max-width: 482px) {
    .signIn {
      display: none;
    }
    .signInIconOnly {
      display: block;
    }
  }
`;
