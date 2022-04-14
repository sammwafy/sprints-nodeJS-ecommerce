import SideBar from "../../Componenets/AdminComponents/sidebar/SideBar"
import NavBar from "../../Componenets/AdminComponents/navbar/NavBar"
import DataTable from "../../Componenets/AdminComponents/datatable/DataTable"
import "./AdminList.scss"
const AdminList = ({ columns, rows, type }) => {
    return (
        <div className="list-table">
            <SideBar />
            <div className="list-page-wrapper">
                <NavBar />
                <DataTable columns={columns} rows={rows} type={type} />
            </div>

        </div>
    )
}

export default AdminList