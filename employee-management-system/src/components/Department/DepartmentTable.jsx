import React, { useEffect, useState } from 'react'
import AddDepartmentModal from './AddDepartmentModal';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useDepartment } from '../../context/DepartmentContext';
import Department from '../../pages/Department';
import { toast } from 'react-toastify';
import { useEmployee } from '../../context/EmployeeContext';
import { MdDelete } from 'react-icons/md';


export default function DepartmentTable() {

    const [showDModal, setShowDModal] = useState(false);

    const {employees} = useEmployee();


    const { addDepartment, deleteDepartment ,  departments } = useDepartment();

    const handleDelete = (id , name) => {

        const isDepartmentUsed = employees.some(employee => employee.department === name)

        if(isDepartmentUsed){
            toast.error("Department is assigned to employees");
            return;        
        }

        deleteDepartment(id) ;
        toast.success("Delete Successful");  
    }

    const depLen = departments.length;

    return (
        <div className="table-container">
            <div className="table-header">
                <h2>Department List</h2>

                <button onClick={() => setShowDModal(true)}>+ Add Department</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Department Name</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (depLen > 0 ) ?( departments.map((department) => (
                            <tr key={department.id}>

                                <td>{department.id}</td>
                                <td>{department.name }</td>

                                <td className='action-buttons'>

                                    <button className='delete-btn' onClick={()=>handleDelete(department.id , department.name)}><MdDelete /> Delete</button>
                                </td>
                            </tr>
                        ) 

                        )): (
                            <tr> 
                                <td colSpan="3" >
                                    No Department Found
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {
                showDModal && (<AddDepartmentModal   addDepartment={addDepartment} closeModal={() => setShowDModal(false)} />)

            }
        </div>
    )
}
