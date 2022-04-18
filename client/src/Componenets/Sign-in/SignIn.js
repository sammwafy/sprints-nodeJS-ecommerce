import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { LoginWrapper } from "./styles/sign-in.styled";
import Container from "react-bootstrap/Container";
import { FaLock } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <LoginWrapper>
      <Container className="container">
        <h1>Sign In</h1>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <IoMdMailOpen />
            </InputGroup.Text>
            <FormControl
              required
              type="email"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FaLock />
            </InputGroup.Text>
            <FormControl
              required
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <Form.Group className="mb-3 checkTerms" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" />I read and agree to{" "}
            <Link to="/">Terms & Conditions</Link>
          </Form.Group>
          <Button className="LoginBtn" type="submit">
            Sign In
          </Button>
        </Form>
      </Container>
    </LoginWrapper>
  );
};

export default SignIn;
