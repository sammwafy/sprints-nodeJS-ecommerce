import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" className="form-control" placeholder="Search" />
                    <SearchIcon className="navIcon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="navIcon" />
                    </div>
                    <div className="item">
                        <DarkModeIcon className="navIcon" />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="navIcon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className="navIcon" />
                        <div className="badge">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleIcon className="navIcon" />
                        <div className="badge">2</div>
                    </div>
                    <div className="item">
                        <FormatListBulletedIcon className="navIcon" />
                    </div>
                    <div className="item">
                        <img src="main-qimg-7b3f1fc4dd119a2a4a3978dfcf536904-lq.jpeg" className="avatar" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar