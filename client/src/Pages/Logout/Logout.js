import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Layout from "../../Componenets/Layout/Layout";
import styled from "styled-components";
import checkCircle from "../../Assets/imgs/checkCircle.gif";
import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

const Logout = () => {
  const [cookies, _, removeCookie] = useCookies(["token", "id"]);
  const navigate = useNavigate()
  const { setAuth } = useContext(AuthContext);
 

  useEffect(() => {
    removeCookie("token");
    removeCookie("id");
    removeCookie("username");
    setAuth()
    if (!cookies.id && !cookies.token) {
      setTimeout(() => navigate('/login'),3600);
    }
  }, [cookies]);

  return (
    <LogoutWrapper>
      <Layout>
        {!("id" in cookies) && !("token" in cookies) ? (
          <div className="cardMSG">
            <Container className="msgContainer">
              <img src={checkCircle} alt="checkCircle" />
              loginout ...
            </Container>
          </div>
        ) : (
          <div>cannot logout</div>
        )}
      </Layout>
    </LogoutWrapper>
  );
};
const LogoutWrapper = styled.div`
  .cardMSG {
    display: block;
    padding: 50px 0;
    background: #9633ff;
  }
  .msgContainer {
    width: calc(100vw / 2.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin: 50px auto;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    padding: 15px 5.4rem;
    font-weight: 600;
    font-size: 1.8rem;
    img {
      width: 100px;
      margin-bottom: 20px;
    }
    @media screen and (max-width:482px){
      width: 90vw;
      padding: 15px 1.4rem;
    }
  }
`;
export default Logout;
