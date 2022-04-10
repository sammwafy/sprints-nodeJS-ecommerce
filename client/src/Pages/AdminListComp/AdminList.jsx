import SideBar from "../../Componenets/AdminComponents/sidebar/SideBar"
import NavBar from "../../Componenets/AdminComponents/navbar/NavBar"
import DataTable from "../../Componenets/AdminComponents/datatable/DataTable"
import "./AdminList.scss"
const AdminList = () => {
    return (
        <div className="list-table">
            <SideBar />
            <div className="list-page-wrapper">
                <NavBar />
                <DataTable />
            </div>

        </div>
    )
}

export default AdminList