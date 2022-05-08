import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth.js";
import ChangePassword from "./changePassword.js";
import { ProfileWrapper } from "./styles/Profile.styled.js";
import axios from "../../Hooks/axios";
import {
  FaEdit,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import AboutMe from "./AboutMe.js";
import Socials from "./Socials.js";
import Avatar from "./Avatar.js";
const Profile = () => {
  const { auth } = useAuth();

  const [EditAboutMe, setEditAboutMe] = useState(false);
  const [EditSocials, setEditSocials] = useState(false);
  const [EditAvatar, setEditAvatar] = useState(false);
  const [EditPassword, setEditPassword] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        token: `Bearer ${auth?.token}`,
      },
    };

    axios.get(`/api/users/findMyInfo/${auth.id}`, config).then(
      (response) => {
        setUserInfo({
          avatar: response?.data?.avatar,
          status: response?.data?.status,
          username: response?.data?.username,
          aboutMe: response?.data?.aboutMe || "",
          email: response?.data?.email,
          socials: response?.data?.socials,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }, [auth.id]);

  console.log(auth);
  console.log(userInfo);
  return (
    userInfo &&
    userInfo.status === "active" && (
      <ProfileWrapper>
        <Container>
          {EditAboutMe ? (
            <AboutMe
              id={auth?.id}
              token={auth?.token}
              setEditAboutMe={setEditAboutMe}
            />
          ) : EditAvatar ? (
            <Avatar
              id={auth?.id}
              token={auth?.token}
              setEditAvatar={setEditAvatar}
            />
          ) : EditSocials ? (
            <Socials
              id={auth?.id}
              token={auth?.token}
              setEditSocials={setEditSocials}
              socials={userInfo.socials}
            />
          ) : EditPassword ? (
            <ChangePassword
              setEditPassword={setEditPassword}
              id={auth?.id}
              token={auth?.token}
            />
          ) : (
            <>
              <div className="avatar">
                <Image src={userInfo?.avatar} />
                <FaEdit
                  className="editAvatar"
                  onClick={() => setEditAvatar(true)}
                />
              </div>
              <div className="userInfo">
                <div className="infoItem">
                  <div>Username :</div> <span>{userInfo.username}</span>
                </div>
                <div className="infoItem">
                  <div>Email :</div> <span> {userInfo.email}</span>
                </div>
                <hr />
                <h3>
                  About Me <FaEdit onClick={() => setEditAboutMe(true)} />
                </h3>
                <p>{userInfo?.aboutMe || "no bio text yet"}</p>
                <hr />
                <h3>
                  Social Links <FaEdit onClick={() => setEditSocials(true)} />
                </h3>
                <Row className="socialLinks">
                  <Col>
                    <a href={userInfo?.socials?.facebook}>
                      <FaFacebook />
                    </a>
                  </Col>
                  <Col>
                    <a href={userInfo?.socials?.twitter}>
                      <FaTwitter />
                    </a>
                  </Col>
                  <Col>
                    <a href={userInfo?.socials?.telegram}>
                      <FaTelegram />
                    </a>
                  </Col>
                  <Col>
                    <a href={userInfo?.socials?.instagram}>
                      <FaInstagram />
                    </a>
                  </Col>
                </Row>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p style={{ fontWeight: "600" }}>need to change password ?</p>
                <Button variant="warning" onClick={() => setEditPassword(true)}>
                  change password
                </Button>
              </div>
            </>
          )}
        </Container>
      </ProfileWrapper>
    )
  );
};

export default Profile;
