import "./Single.scss";
import SideBar from "../../Componenets/AdminComponents/sidebar/SideBar"
import NavBar from "../../Componenets/AdminComponents/navbar/NavBar"
import TableList from "../../Componenets/AdminComponents/table/TableList"
import ItemCard from "../../Componenets/AdminComponents/ItemCard/ItemCard";
import Chart from "../../Componenets/AdminComponents/chart/Chart";
const Single = () => {
    return (
        <div className="view">
            <SideBar />
            <div className="view-container">
                <NavBar />
                <div className="view-details">
                    <div className="top">
                        <div className="left">
                            <ItemCard />
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
    )
}

export default Single