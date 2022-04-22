/** @format */

import Menu from "../Menu/Menu";
import TopNav from "../Menu/topNav";
import { useState } from "react";

const Header = ({ items }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const MenuOpenHadler = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<>
			<TopNav MenuOpenHadler={MenuOpenHadler} isMenuOpen={isMenuOpen} />
			<Menu items={items} isMenuOpen={isMenuOpen} />
		</>
	);
};

export default Header;
