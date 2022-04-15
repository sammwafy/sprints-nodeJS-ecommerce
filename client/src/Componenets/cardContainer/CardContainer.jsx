import "./cardContainer.scss";
import Card from "../card/Card";

export default function CardContainer() {
    return (

        <div className="cards-container">
            <div className="cards-info" >

                <h1> New Arrivals </h1>

                <h3> ــــــــــــــــــــــ </h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <button> SEE ALL PRODUCTS </button>

            </div>
            <div className="cards-list" >
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    );
}

/* <div className="cards-container">
      <div className="cards-info" >
         <h1> card info </h1>
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
         <button> click me </button>

      </div>
      <div className="cards-list" >
      <Card/>
</div>
   </div>*/