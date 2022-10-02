import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Billing from '../components/Billing&Invoicing/Billing'
import Keyfeatures from '../components/Keyfeatures/Keyfeatures'
import Login from '../components/LoginSignup/Login'
import Signup from '../components/LoginSignup/Signup'
import { Payroll } from '../components/Payroll/Payroll'
import { ProjectBudgeting } from '../components/project_budgeting/ProjectBudgeting'
import Home from '../LandingPage/Home'
import Price from '../PricingComp/Price'


const AllRoutes = () => {
  return (
    <div>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/pricing" element={<Price/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/key-fetures" element={<Keyfeatures/>}/>
  <Route path="/billing-invoicing" element={<Billing/>}/>
  <Route path="/payroll" element={<Payroll/>}/>
  <Route path="/project-budgeting" element={<ProjectBudgeting/>}/>
  {/* <Route path="/payroll" element={<Payroll/>}/> */}

</Routes>
    </div>
  )
}

export default AllRoutes