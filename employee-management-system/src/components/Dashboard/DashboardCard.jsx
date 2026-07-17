import React from 'react'
import "../../styles/DashboardCards.css"
import { useEmployee } from '../../context/EmployeeContext'
import { useDepartment } from '../../context/DepartmentContext';
export default function DashboardCard() {

    const {employees} = useEmployee();
    const {departments} = useDepartment();

    const totalSalary = employees.reduce((sum , emp) => sum + Number(emp.salary) , 0 );

    const averageSalary = employees.length === 0 ? 0 : totalSalary/employees.length;

    const cards1 = [
        {title:'Total Employee' , value:employees?.length},
        {title:'Department' , value:departments?.length},
        {title:'Total Salary' , value:totalSalary},
        {title:'Average Salary  ' , value:averageSalary},
        
    ]

  return (
    <div className='cards'>
        {
            cards1.map((card,index)=>(
                <div className="card" key={index}>
                    <h3>{card.title}</h3>
                    <h2>{card.value}</h2>
                </div>
            )
        )}
    </div>
  )
}
