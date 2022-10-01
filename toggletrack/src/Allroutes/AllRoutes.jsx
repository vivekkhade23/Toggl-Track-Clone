import React from 'react'
import Billing from '../components/Billing&Invoicing/Billing'
import Login from '../components/LoginSignup/Login'
import Signup from '../components/LoginSignup/Signup'
import { Payroll } from '../components/Payroll/Payroll'
import { ProjectBudgeting } from '../components/project_budgeting/ProjectBudgeting'
import Home from '../LandingPage/Home'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Client from '../components/client/Client'
import Price from '../PricingComp/Price'
import Keyfeatures from '../components/Keyfeatures/Keyfeatures'
import NavbarProduct from '../components/navbar/NavbarProduct'


function AllRoutes() {
  return (
    <div>
      {/* <Router> */}
              <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<NavbarProduct />} />
        <Route Path="/key-fetures" element={<Keyfeatures/>}/>
        <Route path="/pricing" element={<Price />} />
        <Route path="/billing-invoicing" element={<Billing />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/project-budget" element={<ProjectBudgeting />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/timer/client" element={<Client/>} />
        <Route path="#" element={<Home />} />

      </Routes>
      {/* </Router> */}
    </div>
  )
}

export default AllRoutes