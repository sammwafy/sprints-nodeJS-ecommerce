import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from "../../../dummy data/user"
import { Link } from "react-router-dom";

const DataTable = ({ columns, rows, type }) => {
    console.log(type);
    const actionColumns = [
        {
            field: "actions", headerName: "Actions", width: 250,
            renderCell: () => {
                return (
                    <div className="actions">

                        <Link to={`/admin/${type}/new`}>
                            <div className="viewButton">View</div>
                        </Link>


                        <div className="editButton">Edit</div>

                        <div className="deleteButton">Delete</div>



                    </div >
                )
            }
        },
    ]



    return (
        <>
            <Link to={`/admin/${type}/new`}>
                <div className="viewButton">View</div>
            </Link>
            <div className="datatable" >
                <div style={{ height: 400, width: '100%', padding: '10px' }}>
                    <DataGrid

                        rows={rows}
                        columns={columns.concat(actionColumns)}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>

            </div>
        </>
    )
}

export default DataTable