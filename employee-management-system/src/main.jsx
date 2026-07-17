import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/global.css"
import {BrowserRouter} from "react-router-dom"
import 'react-toastify/ReactToastify.css';
import { EmployeeProvider } from './context/EmployeeContext.jsx'
import { DepartmentProvider } from './context/DepartmentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <EmployeeProvider>
          <DepartmentProvider>
            <App />
          </DepartmentProvider>
        </EmployeeProvider>
    </BrowserRouter>
  </StrictMode>,
)
