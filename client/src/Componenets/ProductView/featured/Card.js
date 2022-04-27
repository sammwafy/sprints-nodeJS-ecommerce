/** @format */

import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
const ItemCard = ({ title, img, text, buttonTxt, link }) => {
	return (
		<CardWrapper className='theCardWrapper card-item'>
			<Card>
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Button href={`/shop/${link}`} variant='primary'>
						{buttonTxt}
					</Button>
				</Card.Body>
			</Card>
		</CardWrapper>
	);
};
const CardWrapper = styled.div`
	.card {
		padding: 5px;
	}
`;
export default ItemCard;
