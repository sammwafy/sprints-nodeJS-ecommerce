import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import WidgetCustum from '../../Componenets/AdminComponents/widgets/WidgetCustum'
import Chart from '../../Componenets/AdminComponents/chart/Chart'
import Featured from '../../Componenets/AdminComponents/featured/Featured'
import NavBar from '../../Componenets/AdminComponents/navbar/NavBar'
import SideBar from '../../Componenets/AdminComponents/sidebar/SideBar'
import TableList from '../../Componenets/AdminComponents/table/TableList'
import axios from '../../Hooks/axios'
import "./home.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const Home = () => {
  const [cookies, setCookie] = useCookies(["token", "id"]);

  //users status Widgets status
  const [users, setUsers] = useState([])

  //orders status Widgets status
  const [orders, setOrders] = useState([])

  //last week new users
  const [newUsers, setNewUsers] = useState({})

  //no of orders todays widgets

  const [ordersToday, setOrdersToday] = useState({})

  //total income last week widgets
  const [totalIncome, setTotalIncome] = useState({})

  useEffect(() => {
    //get new users last week
    axios.get(`/api/users/numbers`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => setNewUsers(response.data[0])).catch(err => console.log(err))
    //get income last week
    axios.get(`/api/orders/lastsevendays`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => setTotalIncome(response.data[0])).catch(err => console.log(err))

    //get number of orders todays 
    axios.get(`/api/orders/numbers`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => setOrdersToday(response.data[0])).catch(err => console.log(err))

    //get users number by status
    axios.get(`/api/users/status`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => {
      setUsers(response.data)

    }).catch(err => console.log(err))

    axios.get(`/api/orders/status`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => {
      setOrders(response.data)
    }).catch(err => console.log(err))

  }, [])
  console.log(orders)

  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <NavBar />
        <div className="home-widgets-wrapper">

          <div className="widgets">
            {/* new users today */}
            <WidgetCustum title="Last Week new Custumers" value={newUsers?.total || 0} icon={<PersonOutlineIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(94, 255, 0, 0.284)' }} />} type="Users" />


            {/* <Widget type="allUsers" /> */}

            {/* total orders number */}
            <WidgetCustum title="Today Orders" value={ordersToday?.total || 0} icon={<CreditCardIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />} type="Orders" />
            {/* <Widget type="order today count" /> */}

            {/* total income last 7 days */}
            <WidgetCustum title="Today Income" value={totalIncome?.total || 0} icon={<MonetizationOnIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />} type="$" />
            {/* <Widget type="income" /> */}
          </div>

          {/* users status widgets */}
          <div className="widgets">
            {users.map(user => (<WidgetCustum title={user._id} value={user?.total || 0} icon={<PersonOutlineIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />} type="Users" />))}
          </div>

          <div className="widgets">
            {orders.map(order => (<WidgetCustum title={order._id} value={order?.total || 0} icon={<CreditCardIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />} type="Orders" />))}
          </div>
        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Month Revenue" />
        </div>
        <div className="lists">
          <div className="list-title">Latest Transactions</div>
          <TableList />

        </div>
      </div>

    </div>
  )
}

export default Home