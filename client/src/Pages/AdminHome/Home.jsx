import React from 'react'
import Chart from '../../Componenets/AdminComponents/chart/Chart'
import Featured from '../../Componenets/AdminComponents/featured/Featured'
import NavBar from '../../Componenets/AdminComponents/navbar/NavBar'
import SideBar from '../../Componenets/AdminComponents/sidebar/SideBar'
import TableList from '../../Componenets/AdminComponents/table/TableList'
import Widget from "../../Componenets/AdminComponents/widgets/Widget"
import "./home.scss"


const Home = () => {

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

          <div className="widgets">
            {/* new user today */}
            <Widget type="orders" />

            <Widget type="orders" />
            {/* total income last 7 days */}
            <Widget type="orders" />
            {/* Get the orders number in the same day */}
            <Widget type="orders" />
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