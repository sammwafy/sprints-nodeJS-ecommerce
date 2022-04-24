import "./cardContainer2.scss";
import Card from "../card/Card";
import { BsTruck } from "react-icons/bs";

export default function CardContainer2() {
  return (
    <div>
      <div className="free-shipping">
        <BsTruck className="truck" /> FREE FAST SHIPPING WORLDWIDE ON ORDERS
        ABOVE $100
      </div>
      <div className="cards-container">
        <div className="cards-list">
          <Card />
          <Card />
        </div>
        <div className="cards-info">
          <h1> Latest Deals </h1>
          <h3> ــــــــــــــــــــــ </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button> SEE ALL DEALS </button>
        </div>
      </div>
    </div>
  );
}
