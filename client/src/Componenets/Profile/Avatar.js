import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import axios from "../../Hooks/axios";

const Avatar = ({ setEditAvatar, id, token }) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);

  const onImgChange = (image, addUpdateIndex) => {
    // data for submit
    setImage(image);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `/api/users/${id}`,
        { aboutMe: "AboutMe" },
        {
          headers: {
            token: "Bearer " + token,
          },
          withCredentials: true,
        }
      );
      if (res?.data?.aboutMe) {
        setEditAvatar(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <h4 style={{ cursor: "pointer" }} onClick={() => setEditAvatar(false)}>
        {" "}
        <FaLongArrowAltLeft /> get back
      </h4>
      <h3> Change About Me </h3>
      <InputGroup className="mb-3">
        <FormControl
          required
          as="textarea"
          rows="3"
          onChange={(e) => setEditAvatar(e.target.value)}
          placeholder="About Me"
          aria-label="AboutMe"
          aria-describedby="AboutMe"
          autoComplete="off"
        />
      </InputGroup>
      <Button type="submit">submit</Button>
    </Form>
  );
};

export default Avatar;
