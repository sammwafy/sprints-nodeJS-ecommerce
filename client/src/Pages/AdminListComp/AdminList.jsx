import SideBar from "../../Componenets/AdminComponents/sidebar/SideBar"
import NavBar from "../../Componenets/AdminComponents/navbar/NavBar"
import DataTable from "../../Componenets/AdminComponents/datatable/DataTable"
import "./AdminList.scss"
import ScrollToTopOnMount from "../../Componenets/ScrollToTopOnMount"

const AdminList = ({ columns, type }) => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="list-table">
                <SideBar />
                <div className="list-page-wrapper">
                    <NavBar />
                    <h3>{`Table of ${type}`}</h3>
                    <DataTable columns={columns} type={type} />
                </div>

            </div>
        </>
    )
}

export default AdminList