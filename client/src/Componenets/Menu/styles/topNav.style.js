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
  }

  .rightTopNav {
    display: flex;
    justify-content: flex-end;
  }

  .rightTopNav ul {
    display: flex;
    padding: 0;
  }
  .rightTopNav ul li {
    list-style-type: none;
    margin-right: 15px;
    font-size: 0.8rem;
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
    .topBarBlog,
    .signIn {
      display: none;
    }
    .signInIconOnly {
      display: block;
    }
  }


`;
