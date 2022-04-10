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
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
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