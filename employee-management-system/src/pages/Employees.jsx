import React from 'react'
import Dashboard from '../layouts/DashboardLayout'
import EmployeeTable from '../components/Employee/EmployeeTable'

export default function Employees() {
  return (
    <>
        <Dashboard>
            <h1>Employees</h1>
            <EmployeeTable />
        </Dashboard>
    </>
  )
}