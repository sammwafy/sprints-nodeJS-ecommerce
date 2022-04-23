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

const WidgetCustum = ({ title, isMoney, count, link, icon }) => {


    return (
        <div className="widget">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">{isMoney && "$"}{count}</span>
                <Link to={`/admin/orders`} className="link-wrapper">
                    <span className="link">{link}</span>
                </Link>

            </div>
            <div className="right">
                <UpdownInput input={"20%"} sign={"positive"} />
                {icon}

            </div>
        </div>
    )
}

export default WidgetCustum