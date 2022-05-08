import "./cardContainer.scss";
import Card from "../card/Card";
import axios from "../../Hooks/axios";
import { useState } from "react";
import { productActions } from "../../store/productsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

export default function CardContainer() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/api/products/?new=true`)
      .then((res) => {
        setProducts(res.data);
        dispatch(productActions.getProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cards-container">
      <div className="cards-info">
        <h1> New Arrivals </h1>
        <h3> ــــــــــــــــــــــ </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button href="/shop" className="button">
          SEE ALL PRODUCTS
        </Button>
      </div>
      <div className="cards-list">
        {products.slice(0, 3).map((product) => (
          <Card
            title={product.title}
            img={product.image}
            price={product.price}
            id={product._id}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
}
