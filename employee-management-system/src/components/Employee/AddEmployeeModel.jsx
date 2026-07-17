import React, { useEffect, useState } from 'react'
import "../../styles/EmployeeTable.css"
import { toast } from 'react-toastify';
import { useDepartment } from '../../context/DepartmentContext';

export default function AddEmployeeModel({closeModal , addEmployee , editingEmployee , updateEmployee , setShowForm}) {

  const {departments} = useDepartment();


  const [formData , setFormData] = useState({
    name: "",
    email: "",
    department:"",
    salary:""
  })

  const[error , setError] = useState({});

  useEffect(()=>{
    if(editingEmployee){
      setFormData({
        name:editingEmployee.name,
        email:editingEmployee.email,
        department:editingEmployee.department,
        salary:editingEmployee.salary
      })
    }
  } ,  [editingEmployee]);


  const validateForm = () =>{
    const newErrors = {}

    // name
    if(!formData.name.trim()){
      newErrors.name = "Employee name is required";
    }

    // email
    if(!formData.email.trim()){
      newErrors.email = "Email is required";
    }
    
// department
    if(!formData.department.trim()){
      newErrors.department = "EDepartment is required";
    }

    // salary

    // name
    if(!String(formData.salary).trim()){
      newErrors.salary = "Salary is required";
    }
    else if(Number(formData.salary) <= 0){
      newErrors.salary="Salary must be greater than 0";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;

  }

  const handleChange = (event) => {
   const {name , value} = event.target;
   
    setFormData((prev)=>({
      ...prev, [name]:value
    }));

    if(error[name]){
      setError((prev) => ({
        ...prev,[name]:""
      }));
    }

  }

  const handleSubmit = (event) =>{
    
    event.preventDefault();
console.log("Submit Clicked");
    console.log("editingEmployee:", editingEmployee);

    if (!validateForm()) return;

    if (editingEmployee) {
        console.log("Updating...");
        updateEmployee({
            ...formData,
            id: editingEmployee.id
        });
    } else {
        console.log("Adding...");
        addEmployee(formData);
        // setShowForm(false);
                // setIdCount(idCount+1)
                closeModal();
                toast.success("Employee added successfully");
    }

    setFormData({
    name: "",
    email: "",
    department:"",
    salary:""
  });

  setError({});

  }

  return (
    <div className="modal-overLay">
        <div className="modal">
            <div><div className="modal-header">
            <h2>{
                editingEmployee ? "Edit Employee" : "Add Employee"
              }</h2>
            <button className='close-btn' onClick={closeModal}>
X
            </button>
</div></div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Employee name' className={error.name ? "input-error" : ""}/>
                {
                  error.name && ( <small className='error-text'>{error.name}</small> )
                }
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' className={error.email ? "input-error" : ""}/>
                {
                  error.email && ( <small className='error-text'>{error.email}</small> )
                }
                <select name="department" value={formData.department} onChange={handleChange}  className={error.department ? "input-error" : ""}> 
                  <option value="">Select Department</option>
                  {
                    departments.map((department)=>(
                      <option key={department.id} value={department.name}>
                        {department.name}
                      </option>
                    ))
                  }
                </select>
                {
                  error.department && ( <small className='error-text'>{error.department}</small> )
                }
                <input type="number" name="salary" value={formData.salary} onChange={handleChange} placeholder='Salary' className={error.salary ? "input-error" : ""}/>
                {
                  error.salary && ( <small className='error-text'>{error.salary}</small> )
                }
                <button type='submit' className='submit-btn'>{editingEmployee ? "Update Employee" : "Save Employee"}</button>
            </form>

        </div>

        {/* <pre>
          {
            JSON.stringify(formData,null,2)
          }
        </pre> */}

    </div>
  )
}
