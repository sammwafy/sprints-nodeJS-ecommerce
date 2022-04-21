import "./itemCard.scss"

const ItemCard = ({ product }) => {

    console.log(product);


    const user = {
        name: "john",
        Age: 23,
        color: "red"
    }

    return (
        <div className="item-card">
            <span className="edit">Edit</span>
            <h1 className="item-title">Details</h1>
            <div className="item-wrapper">
                <div className="avatar">
                    <img src={product.image} alt="hi" />
                </div>
                <div className="info">
                    {Object.entries(product).map(([key, value]) => (
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