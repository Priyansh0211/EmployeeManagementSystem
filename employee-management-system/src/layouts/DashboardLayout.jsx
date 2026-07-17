import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar/SideBar'
import "../styles/Layout.css"

export default function Dashboard({children}) {
  return (
    <>
    <Navbar />
    <SideBar />

    <main className='main-content'>
        {children}
    </main>
</>

  )
}
