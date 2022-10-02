import React from 'react'
import LargeWithLogoCentered from '../footer/footer'
import styles from "./Billing.module.css"

const Billing = () => {


     return (
          <>
               <div className={styles.Employee_time_tracking_main_div}>
                    <div>
                         <h1>
                              Track every billable hour and bill accurately
                         </h1>
                    </div>
                    <div>
                         <p>
                              Leave behind messy spreadsheets and forgotten time cards. Easily track billable time with one click across multiple projects, tasks, and clients.
                         </p>
                    </div>
                    <div>
                         <span>
                              <p>
                                   Try Toggl Track today. No credit card required.
                              </p>
                         </span>
                    </div>
                    <div className={styles.Employee_time_tracking_main_button_div}>
                         <div>
                              <button  >Sign up for free</button>

                         </div>
                         <div className={styles.Employee_time_tracking_main_demo_p_div}>
                              <p>Book a demo</p>
                              <p></p>
                         </div>
                    </div>

               </div>




               <div className={styles.trustedTypes_main_div}>
                    <div>
                         TRUSTED BY
                    </div>
                    <img className={styles.trustedTypes_main_div1} src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/f99eb40e82b76e7bc1642a43dfe5c2cc/a9558/brands-employee-desktop.png" alt="" />
               </div>




               <div>
                    <div className={styles.alternative_to_timesheets_main_div}>
                         <h2>
                              <em>Seamless</em> client billing with streamlined time tracking
                         </h2>
                    </div>



                    <div className={styles.Less_timesheets_main_div} >
                         <div>
                              <h3>
                                   Track hours in real time
                              </h3>
                              <p>
                                   Cut out the guesswork and skip the messy spreadsheet entry. Track as you work with one click for a record of your workday. Like timesheets, except without the admin labor.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div} >
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/45bd610bc7c83c35a1ad592b19ab0554/daed6/feature-one-click-options.png" alt="" />
                         </div>
                    </div>



                    <div className={styles.Less_timesheets_main_div} style={{ flexDirection: "row-reverse" }}>
                         <div>
                              <h3 >
                                   Bill accurately
                              </h3>
                              <p>
                                   Capture every billable minute worked across your entire team. Easy-to-export data to help you bill with razor-sharp accuracy, and get paid exactly what you deserve — cha-ching!
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/35a77a8670fb4c01c652c61af940dc28/48940/feature-project-billable-chart.png" alt="" />
                         </div>
                    </div>


                    <div className={styles.Less_timesheets_main_div}>
                         <div>
                              <h3>
                                   Track where you work–at your desk or on the go
                              </h3>
                              <p>
                                   With apps for mobile, desktop, and web that sync in real time, a browser plugin and hundreds of integrations, Track can fit into any workflow.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/d2ba9ec606ab24540563dc4d9747f200/93c81/feature-multi-platform.png" alt="" />
                         </div>
                    </div>
               </div>

               <div className={styles.co_founder_of_Newlogic_main_div}>
                    <div>
                         <h4>
                              “Toggl Track increased our profitability by at least 20%. We found out where the team was spending too much time on clients. Whether that was us being inefficient or over-serving, Toggl Track gave us the ability to restrategize, find out what’s wrong, and fix it.”
                         </h4>
                         <p>
                              — Dax Kimbrough, Business Consultant with Sweat+Co
                         </p>
                    </div>
                    <div>
                         <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/ca9c0051b025c65fe70d17665fa6d19f/51ce3/speaker-dax.png" alt="" />
                    </div>
               </div>


               <div>
                    <div className={styles.Designed_to_empower_main_div}>
                         <h2>
                              Get <em>accurate</em> data, whatever your workflow
                         </h2>
                    </div>
                    <div className={styles.Designed_to_empower_logo_main_div}>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img style={{ width: "80%" }} src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/7b895350a4c9d902b51951b23df9dc0f/fd958/illo-integrations.png" alt="" />
                              <h5>100+ integrations</h5>
                              <p>Use Toggl Track with the tools you already use. Embed a timer in 100+ popular tools with the Track browser extensions.</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/47cd7aff2a75c9fbb42a3274372ed65b/1434b/illo-reminders.png" alt="" />
                              <h5>Reminders to help you remember</h5>
                              <p>Set up email reminders, desktop notifications, and Pomodoro timers so you never forget to track time.</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/2a0360ce37c992839633143fb27b29b4/5c336/illo-calendar-view.png" alt="" />
                              <h5>Calendar views</h5>
                              <p>Connect your calendar tools to see your daily and weekly events in Toggl Track, and even copy calendar events as time entries.</p>
                         </div>
                    </div>
               </div>


               <div className={styles.employee_page_faq_main_content_container}>
                    <div className={styles.employee_page_faq_main_content_container_signup2}>
                         {/* <SameSignUp2 /> */}
                    </div>
                    <div className={styles.employee_page_faq_main_content_onbording}>
                         <p>Onboarding a team?</p>
                         <div className={styles.Employee_time_tracking_main_demo_p_div}>
                              <p style={{ marginTop: "19px", color: "#EA96E0", fontWeight: "bold" }}>Book a demo</p>
                              <p style={{ marginTop: "28px", color: "#EA96E0", fontWeight: "bold" }}></p>
                         </div>
                    </div>

                    <h2 className={styles.employee_page_faq_main_content_h2}>
                         FAQs
                    </h2>
                    <div>
                         {/* faq */}
                    </div>
               </div>

               <div className={styles.get_your_team_on_Track_main_div}>
                    <h1>
                         It's time to get your billing on <em>Track</em>
                    </h1>
                    <div className={styles.get_your_team_on_Track_main_container_div}>
                         <div className={styles.get_your_team_on_Track_child_container_div}>
                              <h4>
                                   “
                              </h4>
                              <h6>
                                   Toggl Track has given us actual data about our labor. As women in an industry that remains male-dominated, it's really important to us that our work is rewarded appropriately, and that we're not doing work for free.
                              </h6>
                              <p>
                                   Bethany Kaylor, Writer at RogueMark Studios
                              </p>
                              <img src="https://public-assets.toggl.com/b/static/b77f69af46625ee5cf575f64ff0e38b6/2fffe/review-badges-dark.png" alt="" />
                         </div>
                         <div>

                              {/*signup*/}

                         </div>
                    </div>
               </div>
               <div style={{ backgroundColor: "#2d1738", textAlign: "left", marginTop: "50px" }}>
                    <div style={{ width: "80%", margin: "0 auto" }}>
                         {/*Footer */}
                    </div>
               </div>
               <LargeWithLogoCentered/>

          </>
     )
}

export default Billing