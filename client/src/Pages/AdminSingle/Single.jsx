import "./Single.scss";
import SideBar from "../../Componenets/AdminComponents/sidebar/SideBar";
import NavBar from "../../Componenets/AdminComponents/navbar/NavBar";
import TableList from "../../Componenets/AdminComponents/table/TableList";
import ItemCard from "../../Componenets/AdminComponents/ItemCard/ItemCard";
import Chart from "../../Componenets/AdminComponents/chart/Chart";
import { useParams } from "react-router-dom";
import axios from "../../Hooks/axios";
import ScrollToTopOnMount from "../../Componenets/ScrollToTopOnMount";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from 'react-cookie'
import UserCard from "../../Componenets/AdminComponents/ItemCard/UserCard";
import ProductCard from "../../Componenets/AdminComponents/ItemCard/ProductCard";

const Single = ({ type }) => {
  const [cookies, setCookie] = useCookies(["token", "id"]);
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({})
  console.log(type);
  useEffect(() => {

    axios.get(`api/${type}/find/${id}`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then((response) => setData(response.data)).catch(err => console.log(err));

  }, [id, type])

  console.log(data);
  return (
    <>
      <ScrollToTopOnMount />
      <div className="view">
        <SideBar />
        <div className="view-container">
          <NavBar />
          <div className="view-details">
            <div className="top">
              <div className="left">
                {type === "users" && <UserCard data={data} />}
                {type === "products" && <ProductCard data={data} />}

                {(type !== "users" && type !== "products") && <ItemCard input={data} />}
              </div>

            </div>
            {/* <div className="bottom">
              <h1 className="title">Last Transactions</h1>
              <TableList />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
