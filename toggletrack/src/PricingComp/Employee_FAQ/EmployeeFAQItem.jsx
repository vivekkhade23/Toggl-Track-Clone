import React, { useState } from 'react'
import styles from './employeeFAQ.module.css'

const EmployeeFAQItem = ({question, answer}) => {

    const [show , setShow] = useState(false)
  return (
    <div className={styles.faq_question_h4_main_main_div}  style= {show?{ backgroundColor:"rgb(229, 124, 216)"}:{backgroundColor:"#2C1338;", color:"rgb(252, 229, 216);" }}>
       <div className={styles.faq_question_h4_main_div}  >
       
        {/* <h4 className={styles.faq_question_h4}>{question}</h4> */}
        <h4 className={styles.faq_question_h4} onClick={() =>setShow(!show)}>{question}</h4>
        <h6 className={styles.faq_question_h6} onClick={() =>setShow(!show)}> {show? "↑" : "↓"}</h6>
       </div>
     { show && <p className={styles.faq_question_p}>{answer}</p>     }
    </div>
  )
}

export default EmployeeFAQItem