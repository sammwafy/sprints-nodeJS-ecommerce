/** @format */

import { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import axios from "../../../Hooks/axios";
import ItemCard from "./Card.js";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

const FeaturedCategory = () => {
	const [products, setProducts] = useState([]);
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1366 },
			items: 2,
			paritialVisibilityGutter: 15,
		},
		laptop: {
			breakpoint: { max: 1366, min: 1024 },
			items: 4,
			paritialVisibilityGutter: 20,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
			paritialVisibilityGutter: 20,
		},
		mobile: {
			breakpoint: { max: 482, min: 0 },
			items: 2,
			paritialVisibilityGutter: 25,
			arrows: false,
		},
	};

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.post(
					`/api/products/search/?search=sofa&page=1&limit=5`
				);
				setProducts(res.data.products);
			} catch (err) {
				console.log(err);
			}
		};

		getProducts();
	}, []);

	return (
		<>
			<Card>
				<Card.Img
					variant='top'
					src='https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
				/>
				<Card.Body>
					<Card.Title>Sofa</Card.Title>
					<Card.Text>The featured category</Card.Text>
				</Card.Body>
			</Card>
			<CardsCarouselWrapper>
				<Carousel
					className="caRousela"
					partialVisbile
					itemClass='card-item'
					responsive={responsive}
				>
					{products.length > 0 &&
						products.map((product) => (
							<ItemCard
								img={product?.image[product?.featuredImg || 0]}
								title={product.title}
								buttonTxt='view product'
								key={product._id}
								link={product._id}
							/>
						))}
				</Carousel>
			</CardsCarouselWrapper>
		</>
	);
};

const CardsCarouselWrapper = styled.div`
    width:65%;
  .caRousela{

    ul{width:100%;}
  }
	ul.react-multi-carousel-track {
		width: 100%;
		li .card-item {
			margin: 0 auto;
			width: 90%;
			.card {
				height: 400px;
				@media screen and (max-width: 792px) {
					height: 260px;
					margin-bottom: 10px;
				}
				.card-body {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.card-title {
						height: 50px;
						margin: 0;
					}
					.btn {
						max-width: 140px;
						margin: 0 auto;
						@media screen and (max-width: 792px) {
							font-size: 0.79rem;
							white-space: nowrap;
						}
						@media screen and (max-width: 482px) {
							font-size: 0.79rem;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
`;

export default FeaturedCategory;
