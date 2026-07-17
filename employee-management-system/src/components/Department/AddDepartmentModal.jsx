import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function AddDepartmentModal({closeModal , addDepartment}) {

    const [formData , setFormData] = useState({
        name:"",
    });    

    const handleChange = (event) =>{

        const {name , value } = event.target;

        setFormData((prev) => ({
            ...prev , [name]:value
        }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            addDepartment(formData);
        closeModal();
        toast.success("Department Added Successfully");
        }
        catch(err){
            console.error(err);
        }

    }

  return (
    <div className='modal-overLay'>
        <div className="modal">
            <div className="modal-header">

                <h2>
                    Add Department
                </h2>

                <button className='close-btn' onClick={closeModal}>X</button>
            </div>

            <form action="" onSubmit={handleSubmit}>
                <input name="name" required type="text" onChange={handleChange} placeholder='Department Name'  />
                
                <button type='submit' className='submit-btn'>Save Department</button>
            </form>
        </div>
    </div>
  )
}
