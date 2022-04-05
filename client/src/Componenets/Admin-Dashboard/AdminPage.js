import React from 'react'
import { Admin, Resource,ListGuesser } from "react-admin"
import ProductList from './ProductList'
import restProvider from "ra-data-simple-rest"

const AdminPage = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource name = "products" list = {ProductList} />
        <Resource name = "users" list = {ListGuesser} />
        <Resource name = "profile" list = {ListGuesser} />
    </Admin>
  )
}

export default AdminPage