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
import Widget from "../../Componenets/AdminComponents/widgets/Widget"
import axios from '../../Hooks/axios'
import "./home.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const Home = () => {

  const [inputs, setInputs] = useState([])
  const [cookies, setCookie] = useCookies(["token", "id"]);

  //users status Widgets status
  const [users, setUsers] = useState([])

  //orders status Widgets status
  const [orders, setOrders] = useState([])

  useEffect(() => {

    axios.get(`/api/orders/status`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => setInputs(response.data)).catch(err => console.log(err))

    //get users number by status
    axios.get(`/api/users/status`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => {
      console.log("user staus numbers", response.data);
      setUsers(response.data)
      console.log(response.data);
    }).catch(err => console.log(err))

    axios.get(`/api/orders/status`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => {
      console.log("user staus numbers", response.data);
      setOrders(response.data)
      console.log(response.data);
    }).catch(err => console.log(err))

  }, [])

  console.log(inputs);

  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <NavBar />
        <div className="home-widgets-wrapper">

          <div className="widgets">
            {/* new users today */}
            <Widget type="allUsers" />
            {/* total orders number */}
            <Widget type="order today count" />
            {/* total income last 7 days */}
            <Widget type="income" />
          </div>

          {/* users status widgets */}
          <div className="widgets">
            {users.map(user => (<WidgetCustum title={user._id} value={user.total} icon={<PersonOutlineIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />} type="Users" />))}
          </div>

          <div className="widgets">
            {orders.map(order => (<WidgetCustum title={order._id} value={order.total} icon={<PersonOutlineIcon className="icon" style={{ color: "red", backgroundColor: 'rgba(255, 0, 0, 0.284)' }} />} type="Orders" />))}
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