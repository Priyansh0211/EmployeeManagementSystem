import React, { useContext } from "react";
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const EmployeeContext = createContext();
export default EmployeeContext;

export const useEmployee = () => {
    return useContext(EmployeeContext);
}

export function EmployeeProvider({ children }) {

    const defaultEmployees = [
        {
            id: 1,
            name: "Priyansh",
            email: "asd@gmail.com",
            department: "IT",
            salary: 10000
        }
    ]


    const [searchTeam , setSearchTeam] = useState("");
    const [employees, setEmployees] = useLocalStorage("employees", defaultEmployees)

    // console.log(searchTeam);

    const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTeam.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTeam.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTeam.toLowerCase())
);

    const addEmployee = (newEmployee) => {

        console.log("Add");
        setEmployees([
            ...employees, {
                id: Date.now(),
                ...newEmployee
            }
        ])

    }

    const updateEmployee = (updatedEmployee) => {
        const updatedEmployees = employees.map((employee) =>

            employee.id === updatedEmployee.id ? updatedEmployee : employee
        );

        setEmployees(updatedEmployees);

        
    }

    const deleteEmployee = (id) =>{
            const updateEmployee = employees.filter((employee)=> employee.id !== id);
            setEmployees(updateEmployee);
            
    
        }


    return (
        <EmployeeContext.Provider value={{ employees, setEmployees, addEmployee , updateEmployee ,deleteEmployee , searchTeam , setSearchTeam , filteredEmployees}}>

            {children}

        </EmployeeContext.Provider>
    )
}