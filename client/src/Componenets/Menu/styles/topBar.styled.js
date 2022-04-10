import styled from "styled-components";

export const TopBarWrapper = styled.div`
display: flex;
background:rgb(41 41 43);
height: 25px;
& ul {
  display: flex;
  padding-left: 1rem;
}
& ul li {
  list-style-type: none;
  color: #cdcdcd;
  margin-right: 10px;
  font-size: .9rem;
}
/** small laptops up to 13 inch */
@media screen and (min-width: 1024px) and (max-width: 1336px){
  height: 20px;
  & ul li {
    font-size: .7rem;
  }
}
`