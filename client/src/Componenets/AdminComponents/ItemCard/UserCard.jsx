import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./itemCard.scss";

const UserCard = ({ data }) => {
 
  const { username, email, status } = data;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return Object.keys(data).length > 0 ? (
    <div className="item-card">
      <span className="edit">Edit</span>
      <h1 className="item-title">Details</h1>
      <div className="item-wrapper">
        <div className="avatar">
          <img src="https://i.pravatar.cc/300" alt="hi" />
        </div>
        <div className="info">
          <div className="item-detail">
            <span className="key">"Username"</span>
            <span className="key-value">{username}</span>
          </div>

          <div className="item-detail">
            <span className="key">"Email"</span>
            <span className="key-value">{email}</span>
          </div>

          <div className="item-detail">
            <span className="key">"Status"</span>
            <span className="key-value">{status}</span>
          </div>
          <button className="edit" onClick={handleOpen}>
            Edit User Status
          </button>
          <Collapse in={open}>

            <div>demo</div>
          </Collapse>
        </div>
      </div>
    </div>
  ) : (
    <div>No users</div>
  );
};

export default UserCard;
