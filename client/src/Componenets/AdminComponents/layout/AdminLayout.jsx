import React from 'react'
import NavBar from '../navbar/NavBar'
import SideBar from '../sidebar/SideBar'

const AdminLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div className="home" style={{ display: "flex", flexDirection: "column", flex: "6" }}>
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default AdminLayout