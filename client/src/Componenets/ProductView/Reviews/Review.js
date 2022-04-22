import { Col, Row } from "react-bootstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const Review = () => {
  const Reviews = [
    {
      username: "Sameh",
      avatar: "https://i.pravatar.cc/400?img=53",
      rating: 4.5,
      review:
        "Highly recommended: started with a cheap 2700X, then upgraded to a 5900X and it a really well appointed board.Not really criticisms, but just FYI: there is a heat plate and thermal pads for the secondary M.2, but the primary M.2 slot, next to the GPU has none. I found the Sabrent heat pipe and heatsink work well and there is still clearance down the back of the GPU.",
    },
    {
      username: "Sara",
      avatar: "https://i.pravatar.cc/400?img=32",
      rating: 2,
      review:
        "This was NOT a new product, it was second-hand, and even if they wanted to pass it off as refurbished, it was missing some very vital protective measures. It is astounding that whoever was responsible for this thought it was ok. Luckily, since I was not in a position to sit around and do the return process unless absolutely necessary, I built the computer and as of initial startup, it appears to have not suffered any damage.",
    },
    {
      username: "Karim",
      avatar: "https://i.pravatar.cc/400?img=61",
      rating: 4,
      review:
        "I will point out from the start that I do not do gaming, so I am unable to rate it for it's gaming capabilities. It is mainly used as a day-to-day PC and for video editing. I bought this motherboard as it had all the current features present on it and so will, to a certain degree, be future-proof. My last PC was based around an Asus motherboard and that was in use for ten years. ",
    },
    {
      username: "Shimaa",
      avatar: "https://i.pravatar.cc/400?img=42",
      rating: 5,
      review:
        "The main thing with this board is a very limited range of CPU's that it will accept so alway check the Asus web site for what CPU will work. Also a large 2 slot card like the ZOTAC RTX 3070 Ti AMP Extreme Holo will block the boards VRM chip cooling fan but no large increase in temps at normal use. It is one the best boards for VRM cooling. Keeping at around 62C even with fan blocked.",
    },
  ];
  return (
    <Row>
      <Col className="reviews">
        {Reviews.map((review) => (
          <>
            <div className="userInfo">
              <img src={review.avatar} alt="" />
              <h3>{review.username}</h3>
            </div>
            <Rater total={5} rating={review.rating} interactive={false} />
            <p>{review.review}</p>
            <hr/>
          </>
        ))}
      </Col>
    </Row>
  );
};

export default Review;
