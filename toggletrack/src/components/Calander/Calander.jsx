import { Button, Input } from "@chakra-ui/react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calender.module.css"

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function Calander() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className={styles.App}>
            <h2 className={styles.text}>Add New Event</h2>
            <div className={styles.Display}>
                <Input type="text" placeholder="Add Title" className={styles.input} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
               <DatePicker placeholderText="Start Date" className={styles.calendar}  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker  placeholderText="End Date" className={styles.calendar} backgroundColor="#2c1338" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
               
                <Button  className={styles.button} backgroundColor="#e57cd8"  onClick={handleAddEvent}>
                    Add Event
                </Button>
            </div>
            <Calendar  localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height:500, margin: "40px"}} />
        </div>
    );
}

export default Calander;
