import "./itemCard.scss"

const ItemCard = () => {
    return (
        <div className="item-card">
            <span className="edit">Edit</span>
            <h1 className="item-title">name</h1>
            <div className="item-wrapper">
                <div className="avatar">
                    <img src="/main-qimg-7b3f1fc4dd119a2a4a3978dfcf536904-lq.jpeg" alt="hi" />
                </div>
                <div className="info">
                    <div className="item-detail">
                        <span className="key">name:</span>
                        <span className="key-value">Sara</span>
                    </div>
                    <div className="item-detail">
                        <span className="key">email:</span>
                        <span className="key-value">sara@gmail</span>
                    </div>
                    <div className="item-detail">
                        <span className="key">status:</span>
                        <span className="key-value">Active</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ItemCard