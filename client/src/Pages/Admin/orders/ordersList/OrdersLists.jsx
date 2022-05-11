import './ordersList.scss';
import AdminLayout from '../../../../Componenets/AdminComponents/layout/AdminLayout'
import { useEffect, uesState } from 'react';
import axios from '../../../../Hooks/axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import OrdersTable from '../../../../Componenets/AdminComponents/datatable/OrdersTable';


const OrdersLists = () => {

    return (
        <AdminLayout>
            <OrdersTable />
        </AdminLayout>
    )
}

export default OrdersLists