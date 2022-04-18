import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }




    const data = [
        {
            id: 1,
            title: "playstation 5",
            img: "https://www.citypng.com/public/uploads/small/11598236451dfcgnhcditqzuqfxsbmsrg7fnbig7qhmizcrmdydcduyjcncc9qknmq5syjkjviviqpkiun37inwlonnbnybmrpzpfbq4dm6ybks.png",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Pending",

        },
        {
            id: 2,
            title: "Sofa",
            img: "https://www.ikea.com/eg/en/images/products/ektorp-3-seat-sofa-hallarp-grey__0818567_pe774489_s5.jpg?f=s",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Pending",

        },
        {
            id: 3,
            title: "Sofa",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Approved",

        },
        {
            id: 4,
            title: "sofa",
            img: "https://image.shutterstock.com/image-photo/modern-sofa-260nw-426909265.jpg",
            custumer: "sara",
            date: "1 mars",
            price: 2000,
            method: "cash on delivery",
            status: "Pending",

        },
    ]
    return (
        <div className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table-cell">Tracking ID</TableCell>
                        <TableCell align="right" className="table-cell">Product</TableCell>
                        <TableCell align="right" className="table-cell">Photo</TableCell>
                        <TableCell align="right" className="table-cell">Custumer</TableCell>
                        <TableCell align="right" className="table-cell">Date</TableCell>
                        <TableCell align="right" className="table-cell">Price</TableCell>
                        <TableCell align="right" className="table-cell">Payment Method</TableCell>
                        <TableCell align="right" className="table-cell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}

                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right"><img src={row.img} alt={row.title} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} /></TableCell>
                            <TableCell align="right">{row.custumer}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.method}</TableCell>
                            <TableCell align="right"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableList