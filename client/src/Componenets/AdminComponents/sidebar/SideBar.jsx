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
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                        <PersonIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <AddBusinessIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <AttachMoneyIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <BarChartIcon className="icon" />
                        <span>stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <HealthAndSafetyIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <VpnKeyIcon className="icon" />
                        <span>Logs</span></li>
                    <li><SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <ManageAccountsIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
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