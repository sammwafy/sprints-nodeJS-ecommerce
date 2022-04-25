import axios from "../../Hooks/axios";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { chunk } from "lodash";
import SearchPagination from "./SearchPagination.js";
import spinner from "../../Assets/imgs/Spinner-3.gif";
import { Image } from "react-bootstrap";

const Search = ({ searchInput }) => {
  const [Products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (searchInput) {
      const getProducts = async () => {
        try {
          const res = await axios.post(
            `/api/products/search/?search=${searchInput}&page=1&limit=5`
          );
          setProducts(res.data.products);
          setTotalItems(res.data.total);
        } catch (err) {
          console.log(err);
        }
      };

      getProducts();
    } else {
      setProducts([]);
    }
  }, [searchInput]);

  const chunkedProducts = Products && chunk(Products, 3);

  return Products.length > 0 ? (
    <SSModal className="d-flex flex-column w-100">
      <div className="d-flex">
        {chunkedProducts[currentPage - 1].map((product) => (
          <CardWrapper className="theCardWrapper card-item" key={product._id}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  product.image[product.featuredImg ? product.featuredImg : 0]
                }
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Button href={`/shop/${product._id}`} variant="primary">
                  view product
                </Button>
              </Card.Body>
            </Card>
          </CardWrapper>
        ))}
      </div>
      <SearchPagination
        totalItems={totalItems}
        itemsPerPage={3}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </SSModal>
  ) : (
    searchInput && (
      <div>
        <Image src={spinner} />
      </div>
    )
  );
};

const SSModal = styled.div`
  @media screen and (max-width: 1200px) {
    > .d-flex {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .card-item {
      margin: 12px 0;
    }
  }
  @media screen and (max-width: 776px) {
    flex-direction: column-reverse !important;
    > .d-flex {
      flex-direction: column;
    }
    .card-item {
      margin: 12px 0;
    }
  }
`;
const CardWrapper = styled.div`
  .card {
    padding: 5px;
    margin: 0 15px;
    .card-img-top {
      width: 320px;
      height: 320px;
    }
  }

  @media screen and (max-width: 482px) {
  }
`;
export default Search;
