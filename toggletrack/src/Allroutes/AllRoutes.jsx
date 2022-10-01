import React from 'react'
import Billing from '../components/Billing&Invoicing/Billing'
import Login from '../components/LoginSignup/Login'
import Signup from '../components/LoginSignup/Signup'
import { Payroll } from '../components/Payroll/Payroll'
import { ProjectBudgeting } from '../components/project_budgeting/ProjectBudgeting'
import Home from '../LandingPage/Home'
import {Route,Routes} from "react-router-dom"
import Client from '../components/client/Client'
import Price from '../PricingComp/Price'


function AllRoutes() {
  return (
    <div>
              <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/billing-invoicing" element={<Billing />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/project-budget" element={<ProjectBudgeting />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/timer/client" element={<Client/>} />

      </Routes>
    </div>
  )
}

export default AllRoutes