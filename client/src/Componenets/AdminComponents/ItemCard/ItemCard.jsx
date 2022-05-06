import axios from "axios"
import { useState } from "react"
import "./itemCard.scss"

const ProductCard = () => {
    const [product, setProduct] = useState({})



    return (
        <div className="item-card">
            <span className="edit">Edit</span>
            <h1 className="item-title">Product Details</h1>
            <div className="item-wrapper">
                <div className="avatar">
                    <img src={product?.image} alt="hi" />
                </div>
            </div>
            <div className="info">
                <div className="item-detail">
                    <span className="key">Title</span>
                    <span className="key-value">{product?.title}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard