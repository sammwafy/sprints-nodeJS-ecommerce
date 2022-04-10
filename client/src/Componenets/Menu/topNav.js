import { TopNavWrapper } from "./styles/topNav.style";
import {
  FaBars,
  FaSignInAlt,
  FaNewspaper,
  FaRegHeart,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";
import TopBar from './TopBar'
import styled from "styled-components";

const TopNav = ({MenuOpenHadler,isMenuOpen}) => {
  return (
    <TopWrapper>
    <TopBar />
    <TopNavWrapper>
      <div className="leftTopNav">
        <ul>
          <li onClick={() =>MenuOpenHadler(!isMenuOpen)} style={{cursor: 'pointer'}}>
            <FaBars /> SHOP
          </li>
          <li className="topBarBlog">
            <FaNewspaper /> BLOG
          </li>
          <li className="signIn">
            <FaSignInAlt /> SIGN IN
          </li>
        </ul>
      </div>
      <div className="middleTopNav">Logo</div>
      <div className="rightTopNav">
        <ul>
          <li>
            <FaRegHeart />
          </li>
          <li>
            <FaSearch />
          </li>
          <li>
            <FaShoppingBag />
          </li>
          <li className="signInIconOnly">
            <FaSignInAlt />
          </li>
        </ul>
      </div>
    </TopNavWrapper>
    </TopWrapper>
  );
};

export default TopNav;

const TopWrapper = styled.div`
height: 10vh;
display: flex;
flex-direction: column;
justify-content: space-between;

/** small laptops up to 13 inch */
@media screen and (min-width: 1024px) and (max-width: 1336px){
  height: 12vh;
}
`
