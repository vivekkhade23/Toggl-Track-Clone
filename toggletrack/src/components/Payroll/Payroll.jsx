import style from "./Payroll.module.css";
import { BiCaretRight } from "react-icons/bi";
import { Faq } from "../project_budgeting/Faq";
import LargeWithLogoCentered from "../footer/footer";

export const Payroll = () => {
  const designCards = [
    {
      img: "https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/47cd7aff2a75c9fbb42a3274372ed65b/cc937/illo-reminders.avif",
      h: "Reminders to help you remember",
      p: "Set up email reminders, desktop notifications, and Pomodoro timers so you never forget to track time.",
    },
    {
      img: "https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/e1444ff4e5168185be80f7d13a9458e4/a1536/illo-creepy-eye.avif",
      h: "We say no to employee surveillance",
      p: "And you get a yes from your employees. Employee buy-in is key to accurate data, so we're committed to features that help empower employees.",
    },
    {
      img: "https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/aaeb281e59e470758c049603db7f86a6/daf19/illo-ok-hand.avif",
      h: "Designed to be easy",
      p: "No instruction manual needed. Get your team onboard and start tracking. If you ever need help, our support team has a track record of responding within 3 hours!",
    },
  ];
  return (
    <div>
      <div className={style.heading_div}>
        <h1>
        Payroll time tracking–payroll
          <br />made easy
        </h1>
        <p>
        Slash the time you spend on processing payroll. Pay employees and contractors
          <br /> accurately based on hours worked.
        </p>
        <p>Try Toggl Track today. No credit card required.</p>
        <div className={style.btns_div}>
          <button className={style.signup_btn}>Sign up for free</button>
          <button>
            Book a demo{" "}
            <span>
              <BiCaretRight />
            </span>
          </button>
        </div>
      </div>
      <div className={style.timesheet_div}>
        <div className={style.timesheet_flex}>
          <p>TRUSTED BY</p>
          <img
            src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/f99eb40e82b76e7bc1642a43dfe5c2cc/de5fd/brands-employee-desktop.avif"
            alt=""
          />
        </div>
        <h1>
        Multiple contractors and rates,<span>ones</span> <br />payroll time tracking platform{" "}
          
        </h1>
        <div className={style.timesheet_flex_2}>
          <div>
            <div>
              <h2>Save hours on payroll admin</h2>
              <p>
              Ditch the chaotic time cards and time codes. The team can track time on any device across projects.
               Administrators can export payroll timesheet data in two clicks.
              </p>
            </div>

            <img
              style={{ marginTop: "200px" }}
              src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/59e7925ceb89c4e8844b5d3cf0f9da15/4767a/feature-report-user-alt.avif"
              alt=""
            />

            <div>
              <h2>Protect your business with airtight data</h2>
              <p>
              Get peace of mind with accurate,
               detailed time tracking data and ensure you're ready for audits or contract disputes.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{ marginTop: "100px" }}
              src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/e4b7b678a2d8925896559d183f52b264/94b1b/feature-timesheet-everywhere.avif"
              alt=""
            />
            <div>
              <h2>Calculate payroll with ease and get employees paid on time</h2>
              <p>
              Assign billable rates to team members and calculate how much they've contributed to billable work. Track the balance of billable and non-billable work.
              </p>
            </div>
            <img
              src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/115a5f1d86d76bd11873197763a8307c/d383c/feature-data-payroll.avif"
              alt=""
            />
          </div>
        </div>
        <div  className={style.divfirst} >
            <div className={style.divfirst1}  >
                <p  className={style.para1} >“Toggl Track allowed us to scale from a team of 35 people in one location,
                 to a team of over 100 in four countries across myriad locations.”</p>
                 <p  className={style.para2}>— Gabriel Fagundez, Chief Operating Officer at Moove It</p>
            </div>
            <div className={style.divfirst2}  >
            <img  src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/778d818cfc7964f059a2e2e64b34fca2/66f7c/speaker-gabriel.avif" alt=""/>
            </div>
        </div>

        {/* <img
          src="https://user-images.githubusercontent.com/101570740/192701822-b4fd3e90-b0a3-4029-97f3-d14dae705cb5.png"
          style={{ marginLeft: "9rem", marginTop: "1rem" }}
          alt=""
        /> */}
        <h1>
        <span>Frictionless</span> time tracking and<br/>
        seamless payroll for employees and
        <br/>contractors
        </h1>
        
        <div className={style.design_cards_div}>
          {designCards.map((e) => {
            return (
              <div key={e.h}>
                <img src={e.img}  alt="" />
                <h2>{e.h}</h2>
                <p>{e.p}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.FAQsMainDiv}>
      <div className={style.onboardDiv}>
          <p>Onboarding a team?</p>
          <p>Book a demo</p>
        </div>

        <h1 className={style.faq}>FAQs</h1>
        
        <div className={style.signupMainDiv}>
          {/* signup */}
        </div>
        
      </div>
      <Faq />
      <LargeWithLogoCentered/>

    </div>
  );
};