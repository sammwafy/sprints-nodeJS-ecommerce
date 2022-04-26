import "./itemCard.scss"

const ProductCard = ({ data }) => {
    const { title, description, price, quantity, size, reviews, image } = data
    console.log(image);
    return (
        <div className="item-card">
            <span className="edit">Edit</span>
            <h1 className="item-title">Details</h1>
            <div className="item-wrapper">
                <div className="avatar">
                    <img src={image[0] ? image[0] : "https://i.pravatar.cc/300"} alt="hi" />
                    {image.slice(1).map(img => <img src={img} alt="hi" />)}
                </div>
                <div className="info">

                    <div className="item-detail" >
                        <span className="key">"Title"</span>
                        <span className="key-value">{title}</span>
                    </div>

                    <div className="item-detail" >
                        <span className="key">"Description"</span>
                        <span className="key-value">{description}</span>
                    </div>

                    <div className="item-detail" >
                        <span className="key">"Price"</span>
                        <span className="key-value">{price}</span>
                    </div>

                    <div className="item-detail" >
                        <span className="key">"Quantity"</span>
                        <span className="key-value">{quantity}</span>
                    </div>

                    <div className="item-detail" >
                        <span className="key">"size"</span>
                        <span className="key-value">{size}</span>
                    </div>

                    <div className="item-detail" >
                        <span className="key">"Reviews"</span>
                        <span className="key-value">{reviews}</span>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProductCard