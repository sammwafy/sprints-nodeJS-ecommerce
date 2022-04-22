/** @format */

export const productsColumns = [
	{ field: "id", headerName: "ID", width: 130 },

	{
		field: "avatar",
		headerName: "Avatar",
		width: 70,
		renderCell: (params) => {
			console.log(params);
			return (
				<img
					src={params.row.avatar}
					alt={`${params.row.userName}`}
					style={{
						padding: "5px",
						width: "50px",
						height: "50px",
						borderRadius: "50%",
						objectFit: "cover",
					}}
				/>
			);
		},
	},
	{ field: "title", headerName: "Title", width: 200 },

	{
		field: "stock",
		headerName: "Stock",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 70,
	},
	{ field: "price", headerName: "Price", width: 130 },
];

export const categoriesColumns = [
	{ field: "id", headerName: "ID", width: 130 },

	{
		field: "avatar",
		headerName: "Avatar",
		width: 70,
		renderCell: (params) => {
			return (
				<img
					src={params.row.avatar}
					alt={`${params.row.userName}`}
					style={{
						padding: "5px",
						width: "50px",
						height: "50px",
						borderRadius: "50%",
						objectFit: "cover",
					}}
				/>
			);
		},
	},
	{ field: "title", headerName: "Title", width: 200 },
];

export const brandsColumns = [
	{ field: "id", headerName: "ID", width: 130 },

	{
		field: "avatar",
		headerName: "Avatar",
		width: 70,
		renderCell: (params) => {
			return (
				<img
					src={params.row.avatar}
					alt={`${params.row.userName}`}
					style={{
						padding: "5px",
						width: "50px",
						height: "50px",
						borderRadius: "50%",
						objectFit: "cover",
					}}
				/>
			);
		},
	},
	{ field: "title", headerName: "Title", width: 200 },
];

export const ordersColumns = [
	{ field: "id", headerName: "ID", width: 130 },
	{ field: "custumer", headerName: "Custumer", width: 200 },

	{
		field: "date",
		headerName: "Date",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 70,
	},
	{ field: "total", headerName: "Total", width: 130 },
	{ field: "payment", headerName: "Payment", width: 130 },
	{ field: "status", headerName: "Status", width: 130 },
];

export const usersColumns = [
	{ field: "id", headerName: "No.", width: 70 },
	{ field: "username", headerName: "User Name", width: 100 },
	{ field: "email", headerName: "Email", width: 200 },

	{
		field: "status",
		headerName: "Status",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 70,
		renderCell: (params) => {
			return (
				<span
					className={`badge ${params.row.status}`}
					style={{ color: "black" }}
				>
					{params.row.status}
				</span>
			);
		},
	},
];

export const usersRows = [
	{
		id: "1",
		username: "Snow",
		email: "Jon@gmail.com",
		status: "Active",
	},
	{
		id: "2",
		username: "Lanniste",
		email: "Cersei@gmail.com",
		status: "deactive",
	},
	{
		id: "3",
		username: "Sara",
		email: "Jaime@gmail.com",
		status: "Active",
	},
	{
		id: "4",
		username: "Stark",
		email: "Arya@gmail.com",
		lastTrans: " $16",
		status: "Active",
	},
	{
		id: "5",
		username: "Targaryen",
		email: "Daenerys@gmail.com",
		status: "Active",
	},
	{
		id: "6",
		username: "Melisandre",
		email: "Ferrara@gmail.com",
		status: "offline",
	},
	{
		id: "7",
		username: "Clifford",
		email: "Ferrara@gmail.com",
		status: "Active",
	},
	{
		id: "8",
		username: "Frances",
		email: "Rossini@gmail.com",
		status: "Offline",
	},
	{
		id: "9",
		username: "Harvey",
		email: "Harvey@gmail.com",
		status: "Active",
	},
	//add date field..
];

export const productsRows = [
	{
		id: "1",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Jon@gmail.com",
		stock: "Active",
		price: " $35",
	},
	{
		id: "2",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Cersei@gmail.com",
		price: " $42",
		stock: "Offline",
	},
	{
		id: "3",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Jaime@gmail.com",
		stock: "Active",
		price: " $45",
	},
	{
		id: "4",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Arya@gmail.com",
		stock: "Active",
		price: " $16",
	},
	{
		id: "5",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Daenerys@gmail.com",
		stock: "Active",
		price: null,
	},
	{
		id: "6",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: null,
		stock: "offline",
		price: "$150",
	},
	{
		id: "7",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Ferrara@gmail.com",
		stock: "Active",
		price: " $44",
	},
	{
		id: "8",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Rossini@gmail.com",
		stock: "Offline",
		price: " $36",
	},
	{
		id: "9",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Harvey@gmail.com",
		stock: "Active",
		price: " $65",
	},
	{
		id: "10",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Harvey@gmail.com",
		stock: "Active",
		price: " $65",
	},
];

export const categoriesRows = [
	{
		id: "2",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Cersei@gmail.com",
	},
];

export const ordersRows = [
	{
		id: "Snow",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: "Jon@gmail.com",
		total: " $35",
		payment: "Active",
		status: "approved",
	},
	{
		id: "Lannister",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: "Cersei@gmail.com",
		total: " $42",
		payment: "Offline",
		status: "approved",
	},
	{
		id: "Sara",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Jaime@gmail.com",
		total: " $45",
		payment: "Active",
		status: "approved",
	},
	{
		id: "Stark",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: "Arya@gmail.com",
		total: " $16",
		payment: "Active",
		status: "approved",
	},
	{
		id: "Targaryen",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: "Daenerys@gmail.com",
		total: null,
		payment: "Active",
		status: "approved",
	},
	{
		id: "Melisandre",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: null,
		total: "$150",
		payment: "offline",
		status: "approved",
	},
	{
		id: "Clifford",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: "Ferrara@gmail.com",
		total: " $44",
		payment: "Active",
		status: "approved",
	},
	{
		id: "Frances",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: "Rossini@gmail.com",
		total: " $36",
		payment: "Offline",
		status: "approved",
	},
	{
		id: "Roxie",
		custumer:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		date: "Harvey@gmail.com",
		total: " $65",
		payment: "Active",
		status: "approved",
	},
];
