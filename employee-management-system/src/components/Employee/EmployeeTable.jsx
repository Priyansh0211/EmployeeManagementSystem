import React, { useEffect, useState } from 'react'
import "../../styles/EmployeeTable.css"
import AddEmployeeModel from './AddEmployeeModel';
import { toast } from 'react-toastify';
import { useEmployee } from '../../context/EmployeeContext';
import { MdModeEditOutline , MdDelete} from "react-icons/md";


export default function EmployeeTable() {

    

    // const[idCount , setIdCount] = useState(0);

    

    const {employees , setEmployees , addEmployee , updateEmployee , deleteEmployee } = useEmployee();
    const{searchTeam , filteredEmployees} = useEmployee();

    console.log(searchTeam);

    const [showDeleteModal , setShowDeleteModal] = useState(false);
    const [employeeToDelete , setEmployeeToDelete] = useState(null);

   

    const [showForm , setShowForm] = useState(false);

    const [editingEmployee , setEditingEmployee] = useState(null);

    
   
    const editEmployee = (employee) =>{
        setEditingEmployee(employee);
        setShowForm(true);
    }


    const handleUpdateEmployee = (employee) =>{

        updateEmployee(employee) ; 
        
       
        setEditingEmployee(null);
        setShowForm(false);
        toast.info("Employee updated successfully");
    }


    

    const confirmDelete = () =>{
        deleteEmployee(employeeToDelete.id);
        toast.error("Employee deleted successfully")
        setEmployeeToDelete(null);
        setShowDeleteModal(false);
    }




  return (
    <div className='table-container'>

        <div className="table-header">
            <h2>Employee List</h2>

                <div className="table-action">
                    {/* <input type="text" placeholder='Search Employeee..' className="search-input" name="" id="" /> */}
            <button className='add-btn' onClick={()=>setShowForm(true)}> + Add Employee</button>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Action</th>   
                </tr>
            </thead>
            <tbody>
                {
                    filteredEmployees.length > 0 ? ( filteredEmployees.map((employee)=>(
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.email}</td>
                            <td>{employee.salary}</td>
                            <td className='action-buttons'>
                                <button className='edit-btn' onClick={()=>editEmployee(employee)}><MdModeEditOutline />  Edit</button>
                                <button className='delete-btn' onClick={()=> {setEmployeeToDelete(employee); setShowDeleteModal(true);} }> <MdDelete />Delete</button>
                            </td>
                        </tr> 
                    ))) : (
                        <tr>
                            <td colSpan="6" className='no-data'> 
                                No Employees Found
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        {
            showForm && (
                <AddEmployeeModel closeModal={()=>setShowForm(false)} addEmployee={addEmployee} editingEmployee={editingEmployee}
                updateEmployee={handleUpdateEmployee} setShowForm={setShowForm}/>
            )
        }

        {
            showDeleteModal && (
                <div className="modal-overLay">
                    <div className='modal delete-modal'>
                        <h2>Delete Employee</h2>
                        <p>Are you sure you want to delete 
                            <strong>
                                {
                                    employeeToDelete?.name
                                }
                            </strong>?
                        </p>
                        <div className='delete-actions'>
                            <button className='cancel-btn' onClick={()=>setShowDeleteModal(false)}>cancel</button>
                            <button className='delete-btn' onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }

    </div>
  )
}
