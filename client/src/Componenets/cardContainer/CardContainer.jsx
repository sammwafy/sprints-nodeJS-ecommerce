import "./cardContainer.scss";
import Card from "../card/Card";
import axios from "../../Hooks/axios"
import { useState } from "react";
import { productActions } from "../../store/productsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function CardContainer() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`api/products/`).then(res => {
      setProducts(res.data)(
        dispatch(productActions.getProducts(res.data)))
    }
    ).catch(err => console.log(err))
  }, [products])





  return (
    <div className="cards-container">
      <div className="cards-info">
        <h1> New Arrivals </h1>
        <h3> ــــــــــــــــــــــ </h3>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <button> SEE ALL PRODUCTS </button>
      </div>
      <div className="cards-list">


        {/* <Card title={product.title} price={product.price} />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}
