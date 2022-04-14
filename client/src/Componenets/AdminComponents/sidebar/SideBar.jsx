import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom"
const SideBar = () => {
    return (
        <div className="sidebar">

            <div className="top">
                <span className="logo">HomeWare</span>
            </div>
            <hr />
            {/* TODO: center */}
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">Lists</p>
                    <Link to="/admin/users/" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/admin/products/" style={{ textDecoration: "none" }}>
                        <li>
                            <AddBusinessIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/admin/orders" style={{ textDecoration: "none" }}>
                        <li>
                            <AttachMoneyIcon className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>Delivery</span>
                        </li>
                    </Link>
                    <p className="title">Useful</p>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <BarChartIcon className="icon" />
                            <span>stats</span>
                        </li>
                    </Link>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <NotificationsNoneIcon className="icon" />
                            <span>Notifications</span>
                        </li>
                    </Link>

                    <p className="title">Service</p>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <HealthAndSafetyIcon className="icon" />
                            <span>System Health</span>
                        </li>
                    </Link>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <VpnKeyIcon className="icon" />
                            <span>Logs</span>
                        </li>
                    </Link>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsIcon className="icon" />
                            <span>Settings</span>
                        </li>
                    </Link>

                    <p className="title">User</p>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <ManageAccountsIcon className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to="/admin/underConstruc" style={{ textDecoration: "none" }}>
                        <li>
                            <LogoutIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>

                </ul>
            </div>
            {/* TODO: bottom */}
            <div className="bottom">
                <div className="color-option"></div>
                <div className="color-option"></div>
            </div>
        </div>
    )
}

export default SideBar