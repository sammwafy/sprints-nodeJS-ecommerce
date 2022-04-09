import React from 'react'
import NavBar from '../../Componenets/AdminComponents/navbar/NavBar'
import SideBar from '../../Componenets/AdminComponents/sidebar/SideBar'
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
      </div>

    </div>
  )
}

export default Home