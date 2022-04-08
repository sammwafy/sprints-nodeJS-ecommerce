/** @format */

import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import ProductList, { ProductCreate, ProductEdit } from "./ProductList";
import restProvider from "ra-data-simple-rest";
import Statistics from "./Statistics";
import UsersList from "./UsersList";
import { UsersEdit } from "./UsersList";
import TestChart from "./TestChart";

const AdminPage = () => {
	console.log(restProvider("http://localhost:3000"));
	return (
		<Admin
			basename='/admin'
			dataProvider={restProvider("http://localhost:3000")}
		>
			<Resource
				name='products'
				list={ProductList}
				edit={ProductEdit}
				create={ProductCreate}
			/>
			<Resource name='users' list={UsersList} edit={UsersEdit} />
			<Resource name='orders' list={ListGuesser} />
			<Resource name='Statistics' list={TestChart} />
		</Admin>
	);
};

export default AdminPage;
