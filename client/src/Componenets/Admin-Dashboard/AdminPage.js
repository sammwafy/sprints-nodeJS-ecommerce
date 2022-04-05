import React from 'react'
import { Admin, Resource } from "react-admin"
import ProductList from './ProductList'
import restProvider from "ra-data-simple-rest"

const AdminPage = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource name = "products" list = {ProductList} />
    </Admin>
  )
}

export default AdminPage