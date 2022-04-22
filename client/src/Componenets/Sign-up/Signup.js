/** @format */

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { RegisterWrapper } from "./styles/sign-up.styled";
import Container from "react-bootstrap/Container";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth.js";
import axios from "../../Hooks/axios";
import checkCircle from "../../Assets/imgs/checkCircle.gif";
import { useCookies } from "react-cookie";

const SignUp = ({ user }) => {
  const { setAuth } = useAuth();
  const [data, setData] = useState({});
  const emailRefrence = useRef();
  const usernameRefrence = useRef();
  const errRefrence = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
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
    usernameRefrence?.current?.focus();
  }, []);
  // handle form submit and fetch login
  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/auth/register/`,
        {
          username: userName,
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
      const username = response?.data?.username;
      if (username) {
        setSuccessMsg(true);
        setTimeout(() => navigate("/login"), 3600);
      }
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("no server running");
      } else if (err.response?.status === 401) {
        setErrorMsg("check your inputs");
      } else {
        setErrorMsg(
          <>
            Already registered <a href="/login"> Login instead </a>
          </>
        );
      }
      errRefrence?.current?.focus();
    }
  };

  return (
    <>
      <RegisterWrapper>
        <Container className="container">
          <h1>Sign Up</h1>
          {succesMsg ? (
            <section class="successLogin">
              <img src={checkCircle} alt="check circle" />
              <h1>Registered successfully</h1>
            </section>
          ) : (
            <Form onSubmit={SubmitHandler}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="email">
                  <FaUserAlt />
                </InputGroup.Text>
                <FormControl
                  required
                  type="name"
                  ref={usernameRefrence}
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder="username"
                  aria-label="username"
                  aria-describedby="username"
                  autoComplete="off"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="email">
                  <IoMdMailOpen />
                </InputGroup.Text>
                <FormControl
                  required
                  type="email"
                  ref={emailRefrence}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="email"
                  autoComplete="off"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="password">
                  <FaLock />
                </InputGroup.Text>
                <FormControl
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password"
                />
              </InputGroup>

              <Form.Group
                className="mb-3 checkTerms"
                controlId="formBasicCheckbox"
              >
                <Link to="/terms">
                  <Form.Check type="checkbox" required />I read and agree to
                  <span> Terms & Conditions</span>
                </Link>
              </Form.Group>
              <Button className="LoginBtn" type="submit">
                Sign Up
              </Button>
              {errorMsg && (
                <p
                  ref={errRefrence}
                  className={errorMsg ? "errorMsg" : "d-none"}
                  aria-live="assertive"
                >
                  {errorMsg}
                </p>
              )}
            </Form>
          )}
        </Container>
      </RegisterWrapper>
    </>
  );
};

export default SignUp;
