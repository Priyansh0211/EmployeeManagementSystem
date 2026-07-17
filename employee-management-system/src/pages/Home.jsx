import React from 'react'
import Dashboard from '../layouts/DashboardLayout'
import DashboardCard from '../components/Dashboard/DashboardCard'
import EmployeeTable from '../components/Employee/EmployeeTable'

export default function Home() {
  return (
    <>
    <Dashboard>
      <h1>Dashboard</h1>
    <DashboardCard />
    <EmployeeTable />
    </Dashboard>    
    </>
  )
}
