import LargeWithLogoCentered from '../footer/footer'
import styles from './Keyfeatures.module.css'

const Keyfeatures=()=>{
    return (
 <div  className={styles.body1}>
 <div ></div>

<div>
<table>
    <th>
        <td><a href="#tracking">Time Tracking</a></td>
        <td><a href="#reporting">Reporting</a></td>
        <td><a href="#project">Project & Revenue Tracking</a></td>
        <td><a href="#team">Team Scheduling & Management</a></td>
    </th>
</table>
<div id="tracking">
    <h3>Tracking</h3>
    <p>There's more than one way to track time</p>
    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8500be9b3ef28cfb9293446ddd6f28a3/feature-timers.png" alt="asset"/>
            <p className={styles.aa1}>One-Click Timers</p>
            <p className={styles.aa2}>Track time across the web app, desktop app, mobile app, or browser extension - with one click! All your entries will sync automatically.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8500be9b3ef28cfb9293446ddd6f28a3/feature-timers.png" alt="asset"/>
            <p className={styles.aa1}>One-Click Timers</p>
            <p className={styles.aa2}>Track time across the web app, desktop app, mobile app, or browser extension - with one click! All your entries will sync automatically.</p>
        </div>
    </div>


    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/bc5611683afd9f23db67c223c02f15e5/feature-cal-integration.png" alt="asset"/>
            <p className={styles.aa1}>Calendar Integrations</p>
            <p className={styles.aa2}>Integrate your Outlook or Google Calendar into Toggl Track's Calendar view and create or start time entries based on calendar events. Available for our web and mobile apps.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/3564bf4f714c41ebf64c711e2532c2e3/feature-autotracker.png" alt="asset"/>
            <p className={styles.aa1}>Autotracker</p>
            <p className={styles.aa2}>For the forgetful among us, set up Toggl Track to trigger time entry suggestions based on the software you're currently using.</p>
        </div>
    </div>

    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/d4ecf8623e191207b4aef924be6f8d3b/feature-favorites.png" alt="asset"/>
            <p className={styles.aa1}>Favorite time entries</p>
            <p className={styles.aa2}>Pin your most frequently-used time entries to the top of your Timer page for easy access. Currently available for the web app, coming soon to other platforms.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/81089530d0f94f64ea34371d82de77ce/feature-jira.png" alt="asset"/>
            <p className={styles.aa1}>Jira Sync</p>
            <p className={styles.aa2}>Enter your information once, into Jira. Jira Sync will ensure that your Toggl Track Workspace is synced up to your Jira data so you can start tracking time right away—with up-to-date Jira data.</p>
        </div>
    </div>


<div className={styles.container}>
    <div>
        <p className={styles.aa1}>Over 100+ App Integrations</p>
        <p className={styles.aa1}>Toggl Track's browser extensions allow you to start the timer directly from online tools like Asana, Todoist, Trello and more. With features like the Pomodoro Timer, idle detection, and tracking reminders, it’s the ultimate tool to help you stay focused on work.</p>
        <p className={styles.aa1}>Currently available on Chrome and Firefox.</p>
        <button>See all integrations</button>
    </div>
    <div>
        <img className={styles.ph} src="https://public-assets.toggl.com/b/static/integrations-desktop-157a92c40e917125dc69d3ba8e043165.png" alt="asset"/>
    </div>

</div>
</div>


{/* REPORTING */}
<div id="reporting">
<h3>Reporting</h3>
    <p className={styles.aa1}>Powerful reporting to reveal actionable insights</p>
    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/3c080da045d0117b821dc255d1677d6c/feature-time-reports.png" alt="asset"/>
            <p className={styles.aa1}>Summary, Detailed, & Weekly Reports</p>
            <p className={styles.aa2}>Select the level of detail you want to see, filter and sort your data, and create simple, client-ready visuals and reports via CSV or PDF.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/a1fc813547f41e7e031c968be460fea8/feature-saved-reports.png" alt="asset"/>
            <p className={styles.aa1}>Saved Reports</p>
            <p className={styles.aa2}>Set up your preferred reports with specified filters and date ranges. Share the saved report link with your clients so they can view them online.</p>
        </div>
    </div>


    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/383198f0c0874c4c07d5731a3aa79881/feature-email-reports.png" alt="asset"/>
            <p className={styles.aa1}>Schedule Reports to Email</p>
            <p className={styles.aa2}>Schedule your favorite reports to regularly arrive in your inbox so you’ll always stay up to date without the need to log into Toggl.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/205ee8a7c7013e2c60ffa661cd251780/feature-rounding.png" alt="asset"/>
            <p className={styles.aa1}>Time Rounding</p>
            <p className={styles.aa2}>Whether you track seconds, minutes, or 6-minute increments, automatically round time entries up or down to the nearest interval of your choice.</p>
        </div>
    </div>

    
</div>


{/* PROJECT */}
<div id="project">
<h3>Project & Revenue Tracking</h3>
    <p className={styles.aa1}>Where planning and profits meet</p>
    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/7bd9521be3f8f6eb386c94d845cd0efd/feature-project-dashboard.png" alt="asset"/>
            <p className={styles.aa1}>Project Dashboard</p>
            <p className={styles.aa2}>Forecast timelines, budgets, and track progress as you go. Spot problems early and fight off scope creep with easy-to-read visual data.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/30f65cf2f8a754341ca5053b0b8c529e/feature-billable-fixed-fee.jpg" alt="asset"/>
            <p className={styles.aa1}>Billable Rates and Fixed Fees</p>
            <p className={styles.aa2}>Assign billable rates by workspace, team member, project, or project member to clearly see what activities are generating revenue. Add a fixed fee budget to a project to see whether you’re billing enough for hours worked.</p>
        </div>
    </div>


    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/b85f4cb1f10b6a532049c9554a01cc8a/feature-project-alerts.png" alt="asset"/>
            <p className={styles.aa1}>Project Estimates & Alerts</p>
            <p className={styles.aa2}>Get an alert as your project approaches its estimated end, so you'll instantly know when you're nearing the red.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/e66477e10b8dd7bbedf14fb48ea836f0/feature-insights.png" alt="asset"/>
            <p className={styles.aa1}>Insights</p>
            <p className={styles.aa2}>Get actionable insights on your profitability with our Insights feature. With Insights, you can define labor costs for each team member to see how your expenses stack up against your billable rates.</p>
        </div>
    </div>

</div>


{/* TEAM */}
<div id="team">
<h3>Team Scheduling & Management</h3>
    <p className={styles.aa1}>When everyone’s on the same page, it’s magic!</p>
    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/780df679661aefbf3e7038f36d982e14/feature-team-activity.png" alt="asset"/>
            <p className={styles.aa1}>Team Dashboard</p>
            <p className={styles.aa2}>Check in on your team, so you can see who is over capacity and who might be able to lend a hand.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/fbfb7112c78af47d3182a4f94504b0df/feature-tracking-reminders.png" alt="asset"/>
            <p className={styles.aa1}>Email Tracking Reminders</p>
            <p className={styles.aa2}>Automate email reminders to gently nudge team members who haven't tracked their target number of hours.</p>
        </div>
    </div>


    <div className={styles.ph1}>
        <div>
            <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/8460ac6c46a2667068fe9c093241439a/feature-required.png" alt="asset"/>
            <p className={styles.aa1}>Required Fields</p>
            <p className={styles.aa2}>Say goodbye to manual auditing! Set required fields to ensure your team fills in all the information you need for accurate reporting.</p>
        </div>
        <div>
        <img className={styles.ph} src="https://public-assets.toggl.space/58c88da8-9f59-4fb5-ae83-1ebcfa063516/static/4c1a6ba95e1c276c88add60359d47a63/feature-audits.png" alt="asset"/>
            <p className={styles.aa1}>Time Audits</p>
            <p className={styles.aa2}>Quickly find time entries that have not been assigned to a project or task, or that seem too short or too long.</p>
        </div>
    </div>

</div>


</div>

<LargeWithLogoCentered/>

</div>
    )
}

export default Keyfeatures