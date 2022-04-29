/** @format */

import { useEffect, useRef, useState } from "react";
import {
	Button,
	Col,
	Form,
	FormControl,
	Pagination,
	Row,
} from "react-bootstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import axios from "../../../Hooks/axios.js";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import Avatar from "avataaars";
import { generateRandomAvatarOptions } from "./generateRandomAvatars.js";
import { chunk } from "lodash";
import {
	FaArrowLeft,
	FaPencilAlt,
	FaQuoteLeft,
	FaQuoteRight,
} from "react-icons/fa";
import ReviewPagination from "./ReviewPagination.js";

const Review = () => {
	const { auth } = useAuth();
	let reviewsArr;
	const filteredReview = useRef();
	const [comment, setComment] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [rate, setRate] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [errorMsg, setErrorMsg] = useState("");
	const [prevReview, setPrevReview] = useState("");
	const [hasReviewed, setHasReviewed] = useState(false);
	const [newReview, setNewReview] = useState(false);
	const [reviews, setReviews] = useState({});
	const { id } = useParams();

	const productId = id;

	const commentHandler = (e) => {
		setComment(e.target.value);
	};

	const reviewHandler = async (e) => {
		e.preventDefault();

		if (rate && !hasReviewed && comment) {
			try {
				const res = await axios.put(
					`/api/products/review/${productId}`,
					{
						userId: auth.id,
						username: auth.username,
						rating: rate,
						comment: comment,
					},
					{
						headers: {
							token: `Bearer ${auth?.token}`,
							id: auth?.id,
							"Content-Type": "application/json",
						},
						withCredentials: true,
					}
				);
				setSuccessMsg(res?.data);

				setTimeout(() => {
					setHasReviewed(true);
					setNewReview(false);
				}, 1400);
			} catch (err) {
				console.log(err.response);
				if (err.response?.status === 401) {
					setErrorMsg("wrong email or password");
				} else {
					setErrorMsg("failed to login");
				}
			}
		}
	};

	useEffect(() => {
		const productId = id;
		const getReviews = async () => {
			try {
				const res = await axios.get(`/api/products/find/${productId}`);
				setReviews(res?.data?.reviews);
			} catch (err) {
				console.log(err);
			}
		};
		getReviews();
	}, []);

	useEffect(() => {
		if (reviews.length > 0) {
			let newFilter = reviews?.filter((r) => r.userId === auth?.id)[0];

			if (newFilter) {
				setHasReviewed(true);
				setPrevReview(newFilter);
			} else {
				setHasReviewed(false);
			}
		}
	}, [reviews]);

	if (hasReviewed && reviews?.lelgnth > 0) {
		reviewsArr = reviews?.filter((r) => r.userId !== prevReview.userId);
		reviewsArr = chunk(reviewsArr, 5);
	} else {
		reviewsArr = reviews;
		reviewsArr = chunk(reviewsArr, 5);
	}

	return (
		<Row>
			<Col className='reviews'>
				{}
				{!newReview &&
					(hasReviewed ? (
						<div className='d-flex justify-content-between align-items-center p-5'>
							<h5>you have already reviewed this project</h5>
						</div>
					) : (
						<div className='d-flex justify-content-between align-items-center p-5'>
							<h5>you have purchased that product</h5>
							<Button onClick={() => setNewReview(true)}>make a review</Button>
						</div>
					))}

				{newReview ? (
					<>
						<Button
							variant='secondary'
							onClick={() => setNewReview(false)}
							className='d-block ms-auto'
						>
							<FaArrowLeft /> back to reviews
						</Button>
						<div className='newReview'>
							<Rater
								total={5}
								interactive={true}
								onRate={({ rating }) => setRate(rating)}
							/>
							<Form onSubmit={reviewHandler}>
								<FormControl
									required
									as='textarea'
									maxlength='20'
									minlength='5'
									rows={3}
									onChange={(e) => setComment(e.target.value)}
									placeholder='type your review'
									aria-label='text'
									aria-describedby='text'
									autoComplete='off'
								/>
								<Button
									className='reviewSubmit d-block mx-auto my-4 px-4'
									type='submit'
								>
									Submit
								</Button>
							</Form>
							{successMsg && (
								<p style={{ color: "green", fontSize: "1.6rem" }}>
									{successMsg}
								</p>
							)}
						</div>
					</>
				) : reviewsArr?.length > 0 ? (
					<>
						{prevReview && (
							<>
								<div className='userInfo'>
									<Avatar
										avatarStyle='Circle'
										style={{ width: "50px", height: "50px" }}
										{...generateRandomAvatarOptions()}
									/>
									<div
										style={{
											color: "red",
											display: "flex",
											width: "100%",
											justifyContent: "space-between",
										}}
									>
										<h3>{prevReview?.username}</h3>
										<span>
											<FaQuoteLeft /> Your Review <FaQuoteRight />
										</span>
									</div>
								</div>

								<Rater
									total={5}
									rating={prevReview?.rating}
									interactive={false}
								/>
								<p>{prevReview?.comment}</p>
								<hr />
							</>
						)}

						{reviewsArr[currentPage - 1].map((review) => (
							<>
								<div className='userInfo'>
									<Avatar
										avatarStyle='Circle'
										style={{ width: "50px", height: "50px" }}
										{...generateRandomAvatarOptions()}
									/>
									<h3>{review?.username}</h3>
								</div>
								<Rater total={5} rating={review.rating} interactive={false} />
								<p>{review.comment}</p>
								<hr />
							</>
						))}
						<ReviewPagination
							totalItems={reviews?.length}
							itemsPerPage={5}
							currentPage={currentPage}
							onPageChange={(page) => setCurrentPage(page)}
						/>
					</>
				) : (
					<div
						style={{
							fontSize: "1.4rem",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						sorry no reviews yet ! <FaPencilAlt />
					</div>
				)}
			</Col>
		</Row>
	);
};

export default Review;
