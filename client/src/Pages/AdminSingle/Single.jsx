import "./Single.scss";
import SideBar from "../../Componenets/AdminComponents/sidebar/SideBar"
import NavBar from "../../Componenets/AdminComponents/navbar/NavBar"
import TableList from "../../Componenets/AdminComponents/table/TableList"
import ItemCard from "../../Componenets/AdminComponents/ItemCard/ItemCard";
import Chart from "../../Componenets/AdminComponents/chart/Chart";
import { useParams } from "react-router-dom"
import axios from "axios";
import ScrollToTopOnMount from "../../Componenets/ScrollToTopOnMount";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useState } from "react";

const Single = ({ type }) => {
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const { userId } = useParams()
    const { productId } = useParams()
    console.log(productId);
    const { orderId } = useParams()
    console.log(userId);
    const [itemCardInput, setItemCard] = useState({})
    useEffect(() => {
        switch (type) {
            case "users":
                axios.get(`api/users/find/${userId}`, {
                    headers: {
                        token: "Bearer " + cookies.token,
                    },
                }).then(res => console.log(res)).catch(err => console.log(err))

                break;
            case "products":
                axios.get(`api/users/find/${productId}`, {
                    headers: {
                        token: "Bearer " + cookies.token,
                    },
                }).then(res => setItemCard(res.data)).catch(err => console.log(err))
                break;
            default: return
        }

    }, [type])

    console.log(itemCardInput);

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
                                <ItemCard input={itemCardInput} />
                            </div>
                            <div className="right"><Chart aspect={3 / 1} title="Last 6 months spendings" /></div>
                        </div>
                        <div className="bottom">
                            <h1 className="title">Last Transactions</h1>
                            <TableList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single