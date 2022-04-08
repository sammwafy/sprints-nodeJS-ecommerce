/** @format */

import React from "react";
import {
	List,
	Datagrid,
	TextField,
	TextInput,
	EditButton,
	DeleteButton,
	Edit,
	Create,
	SimpleForm,
} from "react-admin";

const ProductList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='title' />
				<TextField source='brand' />
				<TextField source='price' />
				<TextField source='stock' />

				<EditButton basepath='/products' />
				<DeleteButton basepath='/products' />
			</Datagrid>
		</List>
	);
};
const ProductTitle = ({ record }) => (
	<span>Product {record ? `${record.title}` : ""}</span>
);

export const ProductEdit = () => (
	<Edit title={ProductTitle}>
		<SimpleForm>
			<TextInput source='title' />
			<TextInput source='brand' />
			<TextInput source='price' />
			<TextInput source='stock' />
		</SimpleForm>
	</Edit>
);
export const ProductCreate = () => (
	<Create title='New Product'>
		<SimpleForm>
			<TextInput source='title' />
			<TextInput source='brand' />
			<TextInput source='price' />
			<TextInput source='stock' />
		</SimpleForm>
	</Create>
);

export default ProductList;
