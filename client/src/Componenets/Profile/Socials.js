import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLongArrowAltLeft,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import axios from "../../Hooks/axios";

const Socials = ({ setEditSocials, id, token, scoials }) => {
  const [Facebook, setFacebook] = useState(scoials?.facebook || "");
  const [Twitter, setTwitter] = useState(scoials?.twitter || "");
  const [Telegram, setTelegram] = useState(scoials?.telegram || "");
  const [Instagram, setInstagram] = useState(scoials?.instagram || "");
  const submitHandler = async (e) => {
    e.preventDefault();

    if ((Facebook, Twitter, Telegram, Instagram)) {
      try {
        const res = await axios.put(
          `/api/users/${id}`,
          {
            socials: {
              facebook: Facebook,
              twitter:Twitter,
              telegram: Telegram,
              instagram: Instagram
            },
          },
          {
            headers: {
              token: "Bearer " + token,
            },
            withCredentials: true,
          }
        );
        if (res?.data?.socials) {
          setEditSocials(false);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("about me must be more than 50 char");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <h4 style={{ cursor: "pointer" }} onClick={() => setEditSocials(false)}>
        {" "}
        <FaLongArrowAltLeft /> get back
      </h4>
      <h3> Edit Social Links </h3>
      <InputGroup className="mb-3">
        <InputGroup.Text id="facebook">
          <FaFacebook />
        </InputGroup.Text>
        <FormControl
          required
          type="url"
          onChange={(e) => setFacebook(e.target.value)}
          value={Facebook}
          placeholder="facebook"
          aria-label="facebook"
          aria-describedby="facebook"
          autoComplete="off"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="twitter">
          <FaTwitter />
        </InputGroup.Text>
        <FormControl
          required
          type="url"
          onChange={(e) => setTwitter(e.target.value)}
          value={Twitter}
          placeholder="twitter"
          aria-label="twitter"
          aria-describedby="twitter"
          autoComplete="off"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="telegram">
          <FaTelegram />
        </InputGroup.Text>
        <FormControl
          required
          type="url"
          onChange={(e) => setTelegram(e.target.value)}
          value={Telegram}
          placeholder="telegram"
          aria-label="telegram"
          aria-describedby="telegram"
          autoComplete="off"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="instagram">
          <FaInstagram />
        </InputGroup.Text>
        <FormControl
          required
          type="url"
          onChange={(e) => setInstagram(e.target.value)}
          value={Instagram}
          placeholder="instagram"
          aria-label="instagram"
          aria-describedby="instagram"
          autoComplete="off"
        />
      </InputGroup>
      <Button type="submit">submit</Button>
    </Form>
  );
};

export default Socials;
