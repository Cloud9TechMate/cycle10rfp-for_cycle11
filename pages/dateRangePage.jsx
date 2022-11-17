import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import React from 'react';
import styles from '../styles/dateRangePage.module.css'


const DateRangePage = () => {
    const date = new Date();
    console.log(date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let yesterday = `${year}-${month}-${day} `;

    console.log(yesterday);
    
    // const gmailCalendar = 
    // width="40%" height="600px" frameborder="0" scrolling="no"
    return (
        
        <div>
            <div style={{display: "flex"}}>
                <iframe style={{border: "solid 1px #777", width:"40%", height:"600px", frameborder: "0", scrolling: "no"}} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&showNav=1&showPrint=0&showCalendars=0&showTz=1&showTabs=1&showDate=1&mode=MONTH&title=GE%20Calendar"></iframe>
                <div className={styles.img} ></div>
                <div>
                    <h2>Schedule a time</h2>
                    <input type="date" name="begin" min="2022-11-16" />

                    {/* <input type="date" name="begin" min={yesterday.toString()} /> */}

                    <input type="time" min="06:00:00" max="18:00:00"/>
                    {/* <input type="month" /> */}
                    
                    <button type="submit">Book</button>
                <div>
                    <h2>Cancel</h2>
                    <button>Cancel if there is something scheduled</button>
                </div >
                </div>
            </div>
        </div>

    );
}

export default DateRangePage;
