/** @format */

import { TopNavWrapper } from "./styles/topNav.style";
import axios from "../../Hooks/axios";
import {
	FaBars,
	FaSignInAlt,
	FaSignOutAlt,
	FaStore,
	FaSearch,
	FaShoppingBag,
} from "react-icons/fa";
import TopBar from "./TopBar";
import styled from "styled-components";
import logo from "../../Assets/imgs/sprints.png";
import useAuth from "../../Hooks/useAuth.js";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchModal from "../Search/SearchModal.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const TopNav = ({ MenuOpenHadler, isMenuOpen }) => {
	const { auth } = useAuth();
	const location = useLocation();
	const [sum, setSum] = useState(0);

	const [showSearch, setShowshowSearch] = useState(false);

	const handleClose = () => setShowshowSearch(false);
	const handleShow = () => setShowshowSearch(true);

	//get number of cart items
	const cartItems = useSelector((state) => state.cart);
	const cart = localStorage.getItem("cart");

	useEffect(() => {
		let sumNum = cartItems.reduce((acc, product) => acc + product.quantity, 0); //get cart items + quantity
		localStorage.setItem("cartBadge", JSON.stringify(sumNum));
		setSum(sumNum);
	}, [cartItems]);

	return (
		<TopWrapper>
			<SearchModal show={showSearch} close={handleClose} />
			<TopBar />
			<TopNavWrapper>
				<div className='leftTopNav'>
					<ul>
						<li
							onClick={() => MenuOpenHadler(!isMenuOpen)}
							style={{ cursor: "pointer" }}
						>
							<FaBars />
						</li>
						<Link to='/shop' style={{ display: "flex" }}>
							<FaStore className='shopIcon' />
							<li>SHOP</li>
						</Link>

						{auth?.username ? (
							<li className='logout'>
								<a href='/logout'>
									<FaSignOutAlt /> Logout
								</a>
							</li>
						) : (
							<li className='signIn'>
								<Link to='/login' state={{ from: location }} replace>
									<FaSignInAlt /> SIGN IN
								</Link>
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

						<li onClick={handleShow} style={{ cursor: "pointer" }}>
							<FaSearch />
						</li>

						<Link to='/cart' state={{ from: location }} replace>
							<li className='badgeContainer'>
								{sum > 0 && <span className='badge'>{sum}</span>}
								<FaShoppingBag style={{ color: "black" }} />
							</li>
						</Link>
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
