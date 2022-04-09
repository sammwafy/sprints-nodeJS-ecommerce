import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { red } from "@mui/material/colors";
const Widget = ({ type }) => {
    let data;
    switch (type) {
        case "users": data = {
            title: "Users",
            isMoney: false,
            link: "See All Users",
            icon: <PersonOutlineIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />
        };
            break;
        case "orders": data = {
            title: "Orders",
            isMoney: false,
            link: "See All Orders",
            icon: <PersonOutlineIcon className="icon" style={{
                color: "green", backgroundColor: 'rgba(0, 128, 0, 0.419)'
            }} />
        };
            break;
        case "earnings": data = {
            title: "Earnings",
            isMoney: true,
            link: "See All Earnings",
            icon: <PersonOutlineIcon className="icon" style={{ color: "purple", backgroundColor: 'rgba(128, 0, 128, 0.328)' }} />
        };
            break;
        case "balance": data = {
            title: "Balance",
            isMoney: true,
            link: "See All Balance",
            icon: <PersonOutlineIcon className="icon" style={{
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
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}15000</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                {data.icon}

            </div>
        </div>
    )
}

export default Widget