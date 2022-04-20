/** @format */

import Nav from "react-bootstrap/Nav";
import { NavWrapper } from "./styles/nav.styled";
import {
	FaChevronRight,
	FaArrowAltCircleRight,
	FaNewspaper,
	FaSignInAlt,
} from "react-icons/fa";
import Image from "react-bootstrap/Image";

const Menu = ({ items, isMenuOpen }) => {
	return (
		isMenuOpen && (
			<NavWrapper>
				<Nav defaultActiveKey='/home' className='flex-column'>
					<div className='flex-row d-flex navContainer'>
						{items.slice(0, 4).map((i, e) => (
							<Nav.Link href='/home'>
								<h3>{Object.keys(i)[0]}</h3>
								{Object.values(i)[0].map((s) => (
									<Nav.Link className='sub-item' eventKey='link-1'>
										<FaChevronRight />
										{s}
									</Nav.Link>
								))}
							</Nav.Link>
						))}
					</div>
					<div className='flex-row d-flex navContainer'>
						{items.slice(4).map((i, e) => (
							<Nav.Link href='/home'>
								<h3>{Object.keys(i)[0]}</h3>
								{Object.values(i)[0].map((s) => (
									<Nav.Link className='sub-item' eventKey='link-1'>
										<FaChevronRight />
										{s}
									</Nav.Link>
								))}
							</Nav.Link>
						))}
					</div>
				</Nav>

				<div className='d-flex rightBoxContent justify-content-around'>
					<div className='d-flex flex-column imgBox'>
						<div className='d-flex flex-row'>
							<div>
								<Image src='https://www.journal-theme.com/4/image/cache/catalog/journal3/banners/popup-150x150h.jpg.webp' />
							</div>
							<div>
								<Image
									src='https://www.ikea.com/images/8f/09/8f09faaa48881315b38e27bfc5ef027b.jpg?f=xxl'
									style={{ width: "150px", height: "111px" }}
								/>
							</div>
						</div>
						<div className='d-flex flex-row'>
							<div>
								<Image src='https://www.journal-theme.com/4/image/cache/catalog/journal3/banners/23-150x150.jpg.webp' />
							</div>
							<div>
								<Image src='https://www.journal-theme.com/4/image/cache/catalog/journal3/banners/b1-150x150.png.webp' />
							</div>
						</div>
					</div>

					<div className='headerImgCTA'>
						<Image src='https://www.journal-theme.com/4/image/cache/catalog/journal3/banners/17-300x300.jpg.webp' />
						<FaArrowAltCircleRight />
						<div className='filter'></div>
					</div>
				</div>
			</NavWrapper>
		)
	);
};

export default Menu;
