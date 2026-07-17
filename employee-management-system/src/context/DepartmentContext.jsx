import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DepartmentContext = createContext();
export default DepartmentContext;

export const useDepartment = () =>{
    return useContext(DepartmentContext);
}

export function DepartmentProvider({children}){

     const defaultDepartment = [
            {
                id:1,
                name:"IT",
                description:"Software Development and Technical Support"
            },
            {
                id:2,
                name:"HR",
                description:"Human Resource Management"
            },
            {
                id:3,
                name:"Finance",
                description:"Account and Financial Management"
            },
            {
                id:4,
                name:"Marketing",
                description:"Marketing and Brand Promotion"
            },
            {
                id:5,
                name:"Sales",
                description:"Sales and Customes Relations"
            }
        ]



    const [departments , setDepartment] = useLocalStorage("department", defaultDepartment);

    const addDepartment = (department) => {
        const newDepartment = {
            id:Date.now(),
            ...department
        };

        setDepartment((prev)=>[
            ...prev , newDepartment
        ]);
        
    };

    const deleteDepartment = (id) =>{
        const deleteDep = departments.filter((department)=>department.id !== id);
        setDepartment(deleteDep);
    }





    return(
        <DepartmentContext.Provider value={{addDepartment , departments , deleteDepartment}}>
            {children}
        </DepartmentContext.Provider>
    )

}