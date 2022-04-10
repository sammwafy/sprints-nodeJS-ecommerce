import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
    const columns = [
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 70,
            renderCell: (params) => {
                return (
                    <img className="badge" src={params.row.img} alt={`${params.row.userName}`} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                )
            }

        },
        { field: 'id', headerName: 'User Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'lastTrans',
            headerName: 'Last Transaction',
            type: 'number',
            width: 90,
        },
        {
            field: 'status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 70,
            renderCell: (params) => {
                return (
                    <span className="badge">{params.row.status}</span>
                )
            }

        },
    ];

    const rows = [
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Snow', email: 'Jon@gmail.com', lastTrans: 35, status: "Active" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Lannister', email: 'Cersei@gmail.com', lastTrans: 42, status: "Active" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Sara', email: 'Jaime@gmail.com', lastTrans: 45, status: "Active" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Stark', email: 'Arya@gmail.com', lastTrans: 16, status: "Active" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Targaryen', email: 'Daenerys@gmail.com', lastTrans: null, status: "Active" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Melisandre', email: null, lastTrans: 150, status: "offline" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Clifford', email: 'Ferrara@gmail.com', lastTrans: 44, status: "Active" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Frances', email: 'Rossini@gmail.com', lastTrans: 36, status: "offline" },
        { avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU", id: 'Roxie', email: 'Harvey@gmail.com', lastTrans: 65, status: "Active" },
    ];

    return (
        <div className="datatable" >
            <div style={{ height: 400, width: '100%', padding: '10px' }}>
                <DataGrid

                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

        </div>
    )
}

export default DataTable