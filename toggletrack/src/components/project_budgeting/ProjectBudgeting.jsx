import style from "./projectbudgeting.module.css";
import { BiCaretRight } from "react-icons/bi";
// import { Faq2 } from "../Faq/Faq2";

export const ProjectBudgeting = () => {
  const designCards = [
    {
      img: "https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/7b895350a4c9d902b51951b23df9dc0f/99e84/illo-integrations.avif",
      h: "100+ integrations",
      p: "Use Toggl Track with the tools you already use. Embed a timer in 100+ popular tools with the Track browser extensions.",
    },
    {
      img: "https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/780b1be4eb20e534d7864f6f3dc65895/d4f08/illo-desktop-mobile.avif",
      h: "Works where you work",
      p: "Track time on our web app, desktop, and mobile apps. You can even start the timer from your stopwatch!",
    },
    {
      img: "https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/2a0360ce37c992839633143fb27b29b4/c4aba/illo-calendar-view.avif",
      h: "Calendar views",
      p: "Connect your calendar tools to see your daily and weekly events in Toggl Track, and even copy calendar events as time entries.",
    },
  ];
  return (
    <div>
      <div className={style.heading_div}>
        <h1>
        Keep projects profitable and on
          <br />track with project time tracking
        </h1>
        <p>
        Quickly see how time is spent on across multiple projects, clients, and teams. Get
          <br /> insights on the profitability of every project.
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
        Plan better,<span>stress less</span>, and hit <br />deadlines and revenue goals{" "}
          
        </h1>
        <div className={style.timesheet_flex_2}>
          <div>
            <div>
              <h2>Boost profitability</h2>
              <p>
              Track project performance and assess project profitability in real time.
               Compare projects, months, and clients, and see how labor costs stack up against billable rates.
              </p>
            </div>
            <img
              style={{ marginTop: "200px" }}
              src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/24f48a74d42287c7bbebe9cb6a28ea7e/05308/feature-historical-data.avif"
              alt=""
            />
            <div>
              <h2>Keep your team busy but not burdened</h2>
              <p>
              No one should be overworked or underworked.
              Get a bird's eye view of where your team is spending time.
               Reshuffle the work as needed.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{ marginTop: "100px" }}
              src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/0df6b1b7e0a4cfc5fdc298b9d2e0f718/47f88/feature-project-insights.avif"
              alt=""
            />
            <div>
              <h2>Plan with confidence</h2>
              <p>
              Scope projects based on hard data, not gut intuition. Use historical project time tracking insights for better cost projections, forecasts, and realistic budgets.
              </p>
            </div>
            <img
              src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/6ac44cd598477e9322efd7591c226171/bbb10/feature-team-dashboard-full.avif"
              alt=""
            />
          </div>
        </div>
        <img
          src="https://user-images.githubusercontent.com/101570740/192701822-b4fd3e90-b0a3-4029-97f3-d14dae705cb5.png"
          style={{ marginLeft: "0rem", marginTop: "1rem" }}
          alt=""
        />
        <h1>
        <span>Streamlined</span> project time tracking, so<br/>
        you can focus on the strategy
        </h1>
        <div className={style.design_cards_div}>
          {designCards.map((e) => {
            return (
              <div key={e.h}>
                <img src={e.img} width="100%" alt="" />
                <h2>{e.h}</h2>
                <p>{e.p}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Faq2 /> */}
    </div>
  );
};