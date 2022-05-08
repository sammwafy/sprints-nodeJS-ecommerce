import {  Form, FormControl, InputGroup } from "react-bootstrap";
import { FaLock, FaLongArrowAltLeft } from "react-icons/fa";
const ChangePassword = ({setEditPassword}) => {
  return (
    <Form>
      <h4 style={{cursor: 'pointer'}} onClick={()=> setEditPassword(false)}> <FaLongArrowAltLeft/> get back</h4>
      <h3> Change Password </h3>
      <InputGroup className="mb-3">
        <InputGroup.Text id="password">
          <FaLock />
        </InputGroup.Text>
        <FormControl
          required
          type="password"
          id="passwordOLD"
          // onChange={(e) => setPassword(e.target.value)}
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
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          aria-label="Password"
          aria-describedby="password"
        />
        <FormControl
          required
          id="password2"
          type="password"
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="Confirm Password"
          aria-label="Password"
          aria-describedby="password"
        />
      </InputGroup>
    </Form>
  );
};

export default ChangePassword;
