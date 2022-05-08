import { Form, FormControl, InputGroup } from "react-bootstrap";
import { FaLock, FaLongArrowAltLeft } from "react-icons/fa";
import { useState } from "react";
import { Button } from "react-bootstrap";
// import styled from "styled-components";
import axios from "../../Hooks/axios";
const ChangePassword = ({ setEditPassword, id, token }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [Password1, setPassword1] = useState("");
  const [Password2, setPassword2] = useState("");
  const [error, setError] = useState("");


  const submitHandler = async (e) => {
    e.preventDefault();

    if (Password1 === Password2) {
      try {
        const res = await axios.put(
          `/api/users/${id}`,
          { password: Password1 },
          {
            headers: {
              token: "Bearer " + token,
              oldPassword: oldPassword,
              id: id
            },
            withCredentials: true,
          }
        );
        if (res?.data?.aboutMe) {
          setEditPassword(false);
        }
      } catch (err) {
        setError(err?.response?.data);
      }
    }
    else{
      alert("password didn't match")
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <h4 style={{ cursor: "pointer" }} onClick={() => setEditPassword(false)}>
        {" "}
        <FaLongArrowAltLeft /> get back
      </h4>
      <h3> Change Password </h3>
      <InputGroup className="mb-3">
        <InputGroup.Text id="password">
          <FaLock />
        </InputGroup.Text>
        <FormControl
          required
          type="password"
          id="passwordOLD"
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Old Password"
          aria-label="Password"
          aria-describedby="password"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="password">
          <FaLock />
        </InputGroup.Text>
        <FormControl
          required
          type="password"
          id="password1"
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="New Password"
          aria-label="Password"
          aria-describedby="password"
        />
        <FormControl
          required
          id="password2"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Confirm Password"
          aria-label="Password"
          aria-describedby="password"
        />
      </InputGroup>
      <Button type="submit">submit</Button>
      <p style={{padding: '15px 0'}}>{error && error}</p>
    </Form>
  );
};

export default ChangePassword;
