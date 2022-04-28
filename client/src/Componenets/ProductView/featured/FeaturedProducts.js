import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "../../../Hooks/axios";
import ItemCard from "./Card.js";
import Carousel from "react-multi-carousel";
import styled from "styled-components";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1366 },
      items: 3,
      paritialVisibilityGutter: 15,
    },
    laptop: {
      breakpoint: { max: 1366, min: 1024 },
      items: 3,
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
        const res = await axios.get(
          `/api/products/?new=true`
        );

        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <CardsCarouselWrapper>
        <Carousel

          partialVisbile
          itemClass="card-item"
          responsive={responsive}
        >
          {products?.length > 0 &&
            products.map((product) => (
              <ItemCard
                img="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                title={product.title}
                buttonTxt="view product"
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
  width: 100%;
  padding: 20px 0;
  ul.react-multi-carousel-track {
    width: 100%;
    li .card-item {
      margin: 0 auto;
      width: 95%;
      .card {
        height: 440px;
        @media screen and (max-width: 792px) {
          height: 280px;
        }
        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .card-title {
            height: 50px;
            margin:0;
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

export default FeaturedProducts;
