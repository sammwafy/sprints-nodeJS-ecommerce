import styled from "styled-components";

export const ProfileWrapper = styled.div`
  & {
    background: #9633ff;
    padding: 50px 0;
  }
  .container {
    width: calc(100vw / 2.4);
    margin: 0 auto;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    padding: 15px 4.4rem;

    @media screen and (max-width: 1024px) {
      width: calc(100vw / 1.4);
      padding: 15px 1.1rem;
    }
    @media screen and (max-width: 482px) {
      width: 90vw;
      padding: 15px 1.1rem;
    }
  }
  .container {
    h1 {
      padding: 25px 0;
      font-size: 2.7rem;
      font-weight: 600;
      text-align: center;
    }
    h3 {
      padding: 25px 0;
      font-size: 1.7rem;
      font-weight: 600;
      text-align: center;
      svg {
        margin-left: 15px;
        cursor: pointer;
      }
    }
  }
  svg {
    color: #560fec;
    font-size: 1.6rem;
  }
  .input-group-text {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
  }
  input.form-control {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .mb-3 {
    margin-bottom: 35px !important;
  }
  .checkTerms {
    display: flex;
  }
  .checkTerms .form-check-input {
    margin-right: 5px;
  }
  .checkTerms a {
    padding-left: 5px;
    text-decoration: none;
    color: #560fec;
  }

  .avatar {
    position: relative;
    width: 150px;
    height: 140px;
    margin:0 auto;
    display:block;
    svg {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
    img {
      display: block;
      width: 150px;
      height: 140px;
      border-radius: 50%;
      margin: 25px auto;
    }
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    padding: 0 4rem;
    justify-content: center;
  }
  .infoItem {
    margin: 20px 0;
    font-size: 1.4rem;
    font-weight: 600;
    display: flex;

    > div {
      width: 150px;
    }
    span {
      font-size: 1.2rem;
      color: #7c7c7c;
    }
  }

  .socialLinks {
    margin: 0 auto;
  }
`;
