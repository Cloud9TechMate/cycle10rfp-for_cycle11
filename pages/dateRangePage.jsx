import React from 'react';
import styles from '../styles/dateRangePage.module.css'


const DateRangePage = () => {
    return (
        <div>
            <div>
            {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&showNav=1&showPrint=0&showCalendars=0&showTz=1&showTabs=1&showDate=1&mode=MONTH&title=GE%20Calendar" style="border:solid 1px #777" width="40%" height="600px" frameborder="0" scrolling="no"></iframe> */}
            </div>

            <div>
                <h2>Schedule a time</h2>
                <input type="text" name="datetimes" />
                <button type="submit">Book</button>
            </div>

        <div>
            <h2>Cancel</h2>
            <button>Cancel if there is something scheduled</button>
        </div >

        <div className={styles.img} >
            

        </div>

        </div>
    );
}

export default DateRangePage;
