import "./itemCard.scss";
import ReviewPagination from "../../ProductView/Reviews/ReviewPagination.js";
import { useEffect, useState } from "react";
import { chunk } from "lodash";
const ProductCard = ({ data }) => {
  const { title, description, price, quantity, size, reviews, image } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsArr, setReviewsArr] = useState(1);

  useEffect(() => {
    setReviewsArr(chunk(reviews, 5));
  }, [reviews]);

  console.log('walahi ana t3bt');
  return (
    <div className="d-flex justify-content-between flex-wrap ">
      <div className="item-card">
        <span className="edit">Edit</span>
        <h1 className="item-title">Details</h1>
        <div className="item-wrapper">
          <div className="avatar-wrapper">
            <div className="avatar">
              <img
                src={image ? image[0] : "https://i.pravatar.cc/300"}
                alt="hi"
              />

              {image && image.slice(1).map((img) => <div className="avatar"> <img src={img} alt="hi" /></div>)}
            </div>
          </div>

          <div className="info">
            <div className="item-detail">
              <span className="key">"Title"</span>
              <span className="key-value">{title}</span>
            </div>

            <div className="item-detail">
              <span className="key">"Description"</span>
              <span className="key-value">{description}</span>
            </div>

            <div className="item-detail">
              <span className="key">"Price"</span>
              <span className="key-value">{price}</span>
            </div>

            <div className="item-detail">
              <span className="key">"Quantity"</span>
              <span className="key-value">{quantity}</span>
            </div>

            <div className="item-detail">
              <span className="key">"size"</span>
              <span className="key-value">{size}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column review">
        {reviewsArr[currentPage - 1]?.map((review) => (
          <div key={review._id}>
            <div>rating: {review.rating}</div>
            <div>comment: {review.comment}</div>
            <hr />
          </div>
        ))}
        <ReviewPagination
          totalItems={reviews?.length}
          itemsPerPage={5}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
