import styled from "styled-components";

export const RegisterWrapper = styled.div`
  & {
    background: #9633ff;
    padding: 50px 0;
  }
  .container {
    width: calc(100vw / 2.2);
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
  .container > h1 {
    padding: 25px 0;
    font-size: 2.7rem;
    font-weight: 600;
    text-align: center;
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
    @media screen and (max-width: 375px) {
      flex-wrap: wrap;
    }
  }
  .checkTerms .form-check-input {
    margin-right: 5px;
  }
  .checkTerms a {
    display: flex;
    padding-left: 7px;
    text-decoration: none;
    color: black;

    span {
      color: #560fec;
      padding-left: 5px;
    }
    @media screen and (max-width: 375px) {
      span {
        padding-left: 18px;
      }
    }
  }

  .successLogin {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
  }
  .successLogin img {
    width: 150px;
    display: block;
    margin: 20px auto;
  }

  .LoginBtn {
    background-color: #9633ff;
    background-image: linear-gradient(326deg, #560fec 0%, #9633ff 74%);
    border-radius: 14px;
    padding: 0.4rem 2.6rem;
    margin: 0 auto;
    display: block;
  }
  .LoginBtn:hover {
    background-image: linear-gradient(326deg, #9633ff 0%, #560fec 74%);
  }
`;
