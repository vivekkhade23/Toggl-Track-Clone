import React from 'react'
import Billing from '../components/Billing&Invoicing/Billing'
import Login from '../components/LoginSignup/Login'
import Signup from '../components/LoginSignup/Signup'
import { Payroll } from '../components/Payroll/Payroll'
import { ProjectBudgeting } from '../components/project_budgeting/ProjectBudgeting'
import Home from '../LandingPage/Home'
import {Route,Routes} from "react-router-dom"


function AllRoutes() {
  return (
    <div>
              <Routes >
        <Route path="/" element={<Home />} />
  
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/billing-invoicing" element={<Billing />} />
        <Route path="/employee-time" element={<EmployeeTime />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/project-budget" element={<ProjectBudgeting />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes