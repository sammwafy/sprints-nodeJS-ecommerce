import { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import axios from "../../../Hooks/axios";
import ItemCard from "./Card.js";

const FeaturedCategory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.post(
          `/api/products/search/?search=1&page=1&limit=5`
        );
        setProducts(res.data)
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
          variant="top"
          src="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
        <Card.Body>
          <Card.Title>Sofa</Card.Title>
          <Card.Text>The featured category</Card.Text>
        </Card.Body>
      </Card>
      <CardGroup>
        {products.length > 0 &&
          products.map((product) => (
            <ItemCard
              img="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              title={product.title}
              text={product.description}
              buttonTxt="view product"
              key={product._id}
              link={product._id}
            />
          ))}
      </CardGroup>
    </>
  );
};

export default FeaturedCategory;
