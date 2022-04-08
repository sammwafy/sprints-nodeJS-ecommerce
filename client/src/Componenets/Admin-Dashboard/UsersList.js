import React from 'react'
import { BooleanField, BooleanInput, Datagrid, Edit, EditButton, EmailField, List,NumberField, NumberInput, SimpleForm, TextField, TextInput } from 'react-admin'

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <EmailField source="email" />
        <NumberField source="transactions" />
        <BooleanField source="isAdmin" />
        <EditButton basepath = "/users"/>
      </Datagrid>
    </List>
  )
}
const UserTitle = ({record})=>(
  <span>User {record? `${record.name}`:""}</span>
)
export const UsersEdit = ()=>(
  <Edit title ={UserTitle}>
  <SimpleForm>
    <TextInput source ="name" />
    <TextInput type="email" label="Email Address" source ="email" />
    <NumberInput source ="transactions" />
    <BooleanInput source ="isAdmin"/>
  </SimpleForm>
</Edit>)


export default UsersList