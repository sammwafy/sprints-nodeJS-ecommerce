import axios from "axios"
import "./itemCard.scss"

const ItemCard = ({ input }) => {



    return (
        <div className="item-card">
            <span className="edit">Edit</span>
            <h1 className="item-title">Details</h1>
            <div className="item-wrapper">
                <div className="avatar">
                    <img src={input.image} alt="hi" />
                </div>
                <div className="info">
                    {Object.entries(input).map(([key, value]) => (
                        <div className="item-detail" key={key}>
                            <span className="key">{key}</span>
                            <span className="key-value">{value}</span>
                        </div>))}
                </div>


            </div>

        </div>
    )
}

export default ItemCard