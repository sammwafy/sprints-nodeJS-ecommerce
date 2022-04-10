import { TopBarWrapper } from "./styles/topBar.styled";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaRegEnvelope,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <ul>
        <li><FaFacebookSquare/></li>
        <li><FaTwitterSquare/></li>
        <li><FaInstagramSquare/></li>
        <li><FaPinterestSquare/></li>
        <li><FaRegEnvelope/></li>
      </ul>
    </TopBarWrapper>
  );
};

export default TopBar;
