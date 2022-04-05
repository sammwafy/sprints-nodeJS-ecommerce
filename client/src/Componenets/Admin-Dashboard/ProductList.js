import React from 'react'
import { 
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton
 } from "react-admin"

const ProductList = (props) => {
  return (
    <List {...props} >
        <Datagrid>
            <TextField source = "title"/>
            <TextField source = "brand"/>
            <TextField source = "price"/>
            <TextField source = "stock"/>
            
            <EditButton basePath ="/products"/>
            <DeleteButton basePath ="/products"/>
        </Datagrid>
    </List>
  )
}

export default ProductList