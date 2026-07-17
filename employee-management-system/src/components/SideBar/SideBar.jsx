import React from 'react'
import { FiHome, FiUser ,FiBriefcase, FiCalendar, FiDollarSign, FiBarChart, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi'
import "../../styles/SideBar.css"
import { NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <aside className='sidebar'>
        {/* logo */}

        {/* <div className='sidebar-logo'>
            <h2>EMS</h2>
            <span>Admin Panel</span>
        </div> */}

        {/* navigation */}
        <ul className='sidebar-menu'>

        <li className=''>
            <FiHome/>
            <NavLink className="link" to="/">Dashboard</NavLink>
        </li>
        <li >
            <FiUser/>
            <NavLink className="link" to="/employees"> Employee</NavLink>
        </li>
        <li>
            <FiBriefcase/>
            <NavLink className="link" to="/department"> Department</NavLink>
        </li>
        <li>
            <FiCalendar/>
            <span>Attendence</span>
        </li>
        <li>
            <FiDollarSign/>
            <span>Payroll</span>
        </li>
        <li>
            <FiBarChart2/>
            <span>Reports</span>
        </li>
        <li>
            <FiSettings/>
            <span>Settings</span>
        </li>

        </ul>

<button className='logout-btn'>
    <FiLogOut/>Logout
</button>

    </aside>
  )
}
