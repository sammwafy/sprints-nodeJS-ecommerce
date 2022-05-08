/** @format */

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { LoginWrapper } from "./styles/sign-in.styled";
import Container from "react-bootstrap/Container";
import { FaLock } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth.js";
import axios from "../../Hooks/axios";
import checkCircle from "../../Assets/imgs/checkCircle.gif";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const SignIn = ({ user }) => {
	const dispatch = useDispatch();
	const { setAuth } = useAuth();
	const [data, setData] = useState({});
	const emailRefrence = useRef();
	const errRefrence = useRef();
	const [email, setEmail] = useState("sameh@gmail.com");
	const [password, setPassword] = useState("sameh");
	const [errorMsg, setErrorMsg] = useState("");
	const [succesMsg, setSuccessMsg] = useState("");
	// redirection
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	// handle cookies
	const [cookies, setCookie] = useCookies([]);

	// set ref focus for screen readers

	useEffect(() => {
		emailRefrence?.current?.focus();
	}, []);
	// handle form submit and fetch login
	const SubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`/api/auth/login/`,
				{
					email: email,
					password: password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			const accessToken = response?.data?.accessToken;
			const username = response?.data?.username;
			const userID = response?.data?._id;

			if (username && password && accessToken) {
				setSuccessMsg(true);
				setEmail("");
				setPassword("");
				if (userID) {
					axios
						.get(`/api/carts/find/${userID}`, {
							headers: {
								"Content-Type": "application/json",
								token: `Bearer ${accessToken}`,
							},
							withCredentials: true,
						})
						.then((res) => {
							console.log(res.data);
							localStorage.setItem("cart", JSON.stringify(res.data.products));
							dispatch(cartActions.setCart(res.data.products));
							setAuth(response?.data);
							setCookie("token", accessToken);
							setCookie("id", userID);
							setCookie("username", username);
						})
						.catch((err) => console.log(err));
				}
			}
		} catch (err) {
			if (!err?.response) {
				setErrorMsg("no server running");
			} else if (err.response?.status === 401) {
				setErrorMsg("wrong email or password");
			} else {
				setErrorMsg("failed to login");
			}
			errRefrence?.current?.focus();
		}
	};

	return (
		<>
			<LoginWrapper>
				<Container className='container'>
					<h1>Sign In</h1>
					{succesMsg ? (
						<section class='successLogin'>
							<img src={checkCircle} alt='check circle' />
							<h1>Login successfully</h1>
						</section>
					) : (
						<Form onSubmit={SubmitHandler}>
							<InputGroup className='mb-3'>
								<InputGroup.Text id='email'>
									<IoMdMailOpen />
								</InputGroup.Text>
								<FormControl
									required
									type='email'
									ref={emailRefrence}
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									placeholder='Email'
									aria-label='Email'
									aria-describedby='email'
									autoComplete='off'
								/>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text id='password'>
									<FaLock />
								</InputGroup.Text>
								<FormControl
									required
									type='password'
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Password'
									aria-label='Password'
									aria-describedby='password'
								/>
							</InputGroup>
							{/*In  register only i think */}
							{/* <Form.Group
								className='mb-3 checkTerms'
								controlId='formBasicCheckbox'
							>
								<Form.Check type='checkbox' required />I read and agree to{" "}
								<Link to='/'>Terms & Conditions</Link>
							</Form.Group> */}
							<Button className='LoginBtn' type='submit'>
								Sign In
							</Button>
							<p style={{ marginTop: "10px" }}>
								new user ? <Link to='/register'>signup now</Link>
							</p>
							{errorMsg && (
								<p
									ref={errRefrence}
									className={errorMsg ? "errorMsg" : "d-none"}
									aria-live='assertive'
								>
									{errorMsg}
								</p>
							)}
						</Form>
					)}
				</Container>
			</LoginWrapper>
		</>
	);
};

export default SignIn;
