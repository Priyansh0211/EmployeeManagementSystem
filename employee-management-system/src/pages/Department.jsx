import React from 'react'
import Dashboard from '../layouts/DashboardLayout'
import DepartmentTable from '../components/Department/DepartmentTable'

export default function Department() {
  return (
    <Dashboard>
        <h1>Department</h1>
        <DepartmentTable />
    </Dashboard>
  )
}
