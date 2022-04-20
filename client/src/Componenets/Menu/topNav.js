/** @format */

import { TopNavWrapper } from "./styles/topNav.style";
import {
	FaBars,
	FaSignInAlt,
	FaSignOutAlt,
	FaRegHeart,
	FaSearch,
	FaShoppingBag,
} from "react-icons/fa";
import TopBar from "./TopBar";
import styled from "styled-components";
import logo from "../../Assets/imgs/sprints.png";
import useAuth from "../../Hooks/useAuth.js";

const TopNav = ({ MenuOpenHadler, isMenuOpen }) => {
	const { auth } = useAuth();

	return (
		<TopWrapper>
			<TopBar />
			<TopNavWrapper>
				<div className='leftTopNav'>
					<ul>
						<li
							onClick={() => MenuOpenHadler(!isMenuOpen)}
							style={{ cursor: "pointer" }}
						>
							<FaBars /> SHOP
						</li>
						{auth?.username ? (
							<li className='logout'>
								<a href='/logout'>
									<FaSignOutAlt /> Logout
								</a>
							</li>
						) : (
							<li className='signIn'>
								<a href='/login'>
									<FaSignInAlt /> SIGN IN
								</a>
							</li>
						)}
					</ul>
				</div>
				<div className='middleTopNav'>
					<a href='/'>
						<img src={logo} alt='logo' />
					</a>
				</div>
				<div className='rightTopNav'>
					<ul>
						{auth?.username && (
							<li className='helloMSG'>
								hi <span>{auth?.username}</span>
							</li>
						)}
						<li>
							<FaRegHeart />
						</li>
						<li>
							<FaSearch />
						</li>
						<li>
							<FaShoppingBag />
						</li>
						<li className='signInIconOnly'>
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
	@media screen and (min-width: 1024px) and (max-width: 1336px) {
		height: 12vh;
	}
`;
