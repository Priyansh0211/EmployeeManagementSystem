import React from 'react'
import "../styles/Navbar.css"
import {FiBell, FiMenu, FiSearch} from "react-icons/fi"
import {FaUserCircle} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useEmployee } from '../context/EmployeeContext'

export default function Navbar() {

  const {searchTeam,setSearchTeam} = useEmployee();

  // console.log(searchTeam);

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo'><h2 className='logo-text'>EMS</h2></div>
        <ul className='nav-menu'>
            <li><NavLink className='nav-link' to="/">Dashboard</NavLink></li>
            <li><NavLink className="nav-link" to="/employees">Employee</NavLink></li>
            <li><NavLink className="nav-link" to="/department">Department</NavLink></li>
            <li>Attendence</li>
            <li>Reports</li>
        </ul>

        {/* Right Section */}

        <div className='nav-right'>
          <div className="search-box">
            <FiSearch />
            <input type="text" value={searchTeam} onChange={(e)=>setSearchTeam(e.target.value)} placeholder='Search ...'/>
          </div>

          <button className='icon-btn'><FiBell/></button>

          <div className="profile">
            <FaUserCircle/>
            <h4>Priyansh</h4>
            <span>Admin</span>
          </div>

          <button className="menu-btn">
            <FiMenu />
          </button>
        </div>
    </nav>
    </header>
  )
}
