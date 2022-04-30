import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import UpdownInput from "../UpdownInput";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "../../../Hooks/axios";
import { useState } from "react";

const Widget = ({ type }) => {

    const [cookies, setCookie] = useCookies(["token", "id"]);
    const [input, setInput] = useState(null)
    useEffect(() => {
        switch (type) {
            case "allUsers":
                axios.get(`/api/users/numbers`, {
                    headers: {
                        token: "Bearer " + cookies.token
                    }
                }).then(response => setInput(response.data)).catch(err => console.log(err))
                break;
            case "order today count":
                axios.get(`/api/orders/numbers`, {
                    headers: {
                        token: "Bearer " + cookies.token
                    }
                }).then(response => setInput(response.data)).catch(err => console.log(err))
                break;

            case "income":
                axios.get(`/api/orders/lastsevendays`, {
                    headers: {
                        token: "Bearer " + cookies.token
                    }
                }).then(response => setInput(response.data)).catch(err => console.log(err))
                break;

            case "usersStatus":
                axios.get(`/api/users/status`, {
                    headers: {
                        token: "Bearer " + cookies.token
                    }
                }).then(response => {
               
                    setInput(response.data)
                }).catch(err => console.log(err))
                break;


            default: return
        }


    }, [type])

    console.log(type, input);

    let data;
    switch (type) {
        case "allUsers": data = {
            title: "Last Week new Custumers",
            isMoney: false,
            link: "See All Users",
            count: input ? input[0].total : 0,
            tag: "Users",
            icon: <PersonOutlineIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />,

        };
            break;
        case "order today count": data = {
            title: "Today Orders",
            count: input ? input[0].total : 0,
            tag: "orders",
            isMoney: false,
            link: "See All Orders",
            icon: <CreditCardIcon className="icon" style={{
                color: "green", backgroundColor: 'rgba(0, 128, 0, 0.419)'
            }} />,
        };
            break;

        case "income": data = {
            title: "Income last Week",
            isMoney: true,
            link: "See All Earnings",
            count: input ? input[0].total : 0,
            tag: "",
            icon: <MonetizationOnIcon className="icon" style={{ color: "purple", backgroundColor: 'rgba(128, 0, 128, 0.328)' }} />,

        };
            break;
        case "usersStatus": data = {
            title: "Custumer status",
            isMoney: false,
            count: input ? input[0].total : "err",
            tag: "",
            link: "See All Balance",
            icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
                color: "orangered", backgroundColor: 'rgba(255, 68, 0, 0.324)'
            }} />
        };
            break;

        default:
            break;

    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data?.title}</span>

                <div className="bottom">
                    <span className="counter">{data?.isMoney && "$"}{data?.count}
                        <span className="unit">{data.count > 1 ? data.tag : data.tag.slice(0, -1)}</span>
                    </span>
                    {data?.icon}
                </div>
            </div>
        </div>
    )
}

export default Widget