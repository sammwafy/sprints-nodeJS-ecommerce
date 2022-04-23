/** @format */
//product list table
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
					alt={`${params.row.title}`}
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

//catercories list table
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
					alt={`${params.row.title}`}
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

//brands list table
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
					alt={`${params.row.title}`}
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

//orders list table
export const ordersColumns = [
	{ field: "id", headerName: "ID", width: 50 },
	{ field: "custumer", headerName: "Custumer", width: 70 },

	{
		field: "date",
		headerName: "Date",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 130,
	},
	{ field: "total", headerName: "Total", width: 70 },
	{ field: "payment", headerName: "Payment", width: 130 },
	{ field: "status", headerName: "Status", width: 130 },
];

//users list table
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

//coupons list table
export const couponsColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "name", headerName: "Coupon Code", width: 100 },
	{ field: "amount", headerName: "Amount", width: 200 },
	{ field: "date", headerName: "Expire Date", width: 200 },

	{
		field: "status",
		headerName: "Status",
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

//statics rows for TableList

export const categoriesRows = [
	{
		id: "2",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
		title: "Cersei@gmail.com",
	},
];
