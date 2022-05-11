import { useState } from "react"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useParams } from "react-router-dom"
import axios from "../../../Hooks/axios"
import "./itemCard.scss"


const OrderCard = () => {
    const { id } = useParams()
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const [order, setOrder] = useState({});

    useEffect(() => {
        axios
            .get(`/api/orders/find/${id}`, {
                headers: {
                    token: "Bearer " + cookies.token,
                },
                withCredentials: true,
            })
            .then((response) => {

                setOrder(response.data[0]);

            })
            .catch((err) => console.log(err));


    }, [])
    console.log(order);
    return (
        <div>OrderCard</div>
    )
}

export default OrderCard