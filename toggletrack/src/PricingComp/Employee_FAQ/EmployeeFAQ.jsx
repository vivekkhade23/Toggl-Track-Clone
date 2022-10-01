import React, { useState } from 'react'
import EmployeeFAQItem from './EmployeeFAQItem'
import {questions}from "./question"
import styles from './employeeFAQ.module.css'

const EmployeeFAQ = () => {
    const [data , setData]= useState(questions)
  return (
    <>
        <section className={styles.employee_header_section}>
            {data.map((elem) => {
                const{id} = elem
                return <EmployeeFAQItem key={id}  {...elem}/>
            })}
        </section>
    </>
  )
}

export default EmployeeFAQ