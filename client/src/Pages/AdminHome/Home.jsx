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
import CreditCardIcon from '@mui/icons-material/CreditCard';


const Home = () => {

  const [inputs, setInputs] = useState(null)
  const [cookies, setCookie] = useCookies(["token", "id"]);
  useEffect(() => {

    axios.get(`/api/orders/status`, {
      headers: {
        token: "Bearer " + cookies.token
      }
    }).then(response => setInputs(response.data)).catch(err => console.log(err))

  }, [])
  console.log(inputs);

  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <NavBar />
        <div className="home-widgets-wrapper">
          <div className="widgets">
            {/* new user today */}
            <Widget type="allUsers" />

            <Widget type="todayOrders" />
            {/* total income last 7 days */}
            <Widget type="income" />
            {/* Get the orders number in the same day */}
            <Widget type="userStatusNo" />
          </div>

          {/* <div className="widgets">
            {inputs.map(input => (<WidgetCustum title={input._id} count={input.total} icon={(<CreditCardIcon className="icon" style={{
              color: "orangered", backgroundColor: 'rgba(255, 68, 0, 0.324)'
            }} />)} />))}
          </div> */}

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