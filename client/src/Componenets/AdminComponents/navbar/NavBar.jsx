import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import useAuth from "../../../Hooks/useAuth"
import { BsPersonCircle } from "react-icons/bs"
const NavBar = () => {
    const { auth } = useAuth()
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" className="form-control" placeholder="Search" />
                    <SearchIcon className="navIcon" />
                </div>
                <div className="items">

                    <div className="item">
                        <NotificationsNoneIcon className="navIcon" />
                        <div className="badge">2</div>
                    </div>

                    <div className="item">
                        <BsPersonCircle style={{ fontSize: "20px" }} />
                        <p>Welcome, {auth?.username}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar