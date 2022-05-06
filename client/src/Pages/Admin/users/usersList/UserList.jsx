import UserTable from '../../../../Componenets/AdminComponents/datatable/UserTable'
import AdminLayout from '../../../../Componenets/AdminComponents/layout/AdminLayout'

const UserList = () => {
    return (
        <AdminLayout>
            <h2>List of Users</h2>
            <UserTable />
        </AdminLayout>
    )
}

export default UserList