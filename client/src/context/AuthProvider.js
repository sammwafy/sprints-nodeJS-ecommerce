/**
 * The Authntication provider for our app | v 0.1
 * created: 16/4/22
 * author: Sameh Hassan
 *
 * @format
 */

import { useState, createContext } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [cookies, setCookie] = useCookies([]);

	const [auth, setAuth] = useState(cookies);
	const [cartProducts, setCartProducts] = useState([]);

	return (
		<AuthContext.Provider
			value={{ auth, setAuth, cartProducts, setCartProducts }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
