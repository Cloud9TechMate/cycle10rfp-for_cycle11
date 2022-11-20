// import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import React, {useState} from 'react';
import styles from '../styles/dateRangePage.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Court from './index';

export const grabUser = (item) => {
    console.log(item);
}
grabUser();

const DateRangePage = () => {
    console.log();
    
    const [values, setValues] = useState( //for 2nd DatePicker
        {
            date: new Date(),
            disabled: true,
            noWeekEnds: function (date) {
                // console.log(date);
                const day = date.getDay();
                return day !== 0 && day !== 6;
            },
            // time: setHours(setMinutes(new Date(), 0), 9),

        }
    );

    const filterPassedTime = (time) => {
        // console.log(time);
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    let finalDate;
    let time;
    const i = new Date();
    console.log(i.getHours())
    console.log(i.getHours() -1);
    const onChange = (e) => {
        // console.log(e);
        setValues({...values, date: e,}); /// spread the values, key: value pair that you would like to change
        console.log({...values})
        console.log(values);
        const date = values.date;
        console.log(date);
        console.log(typeof date);
        const dateString = date.toString();
        console.log(typeof dateString);
        const dateSplit = dateString.split(" ");
        console.log(dateSplit);
        finalDate = `${dateSplit[0]} ${dateSplit[1]} ${dateSplit[2]}, ${dateSplit[3]}`;
        console.log(finalDate);
        console.log(typeof finalDate);
        time = `${dateSplit[4]}`
        console.log(time);
        confirmation(finalDate, time);
        const x = "12"
        console.log(typeof Number(time));
        const z = Number(time);
        console.log(z)
        const v = new Date();

        console.log(date.getHours(), v.getHours() + 1);
        if(date.getHours() > v.getHours() + 1) {
            console.log(true);
            setValues({...values, disabled: false})
        }
        else {
            console.log(false);
        }
	};
    // let disabled = true;
    const confirmation = (finalDate, time, disabled) => {
        // console.log(disabled);
        // if() {

        // }
        // return disabled = true;
        // console.log(finalDate, time);
        return disabled =false;
    }
    // disabled = confirmation()

    /// destructure the date value so I can say if both date and time is true then disabled = false
    
    // if(values.date) {
    //     disabled = false;
    //     console.log(disabled);
    // }
    // else{
    //     console.log(values.date);
    // }
    // console.log(disabled);
    // console.log(values);

    return (
        
        <div>
            <div style={{display: "flex"}}>
                <iframe style={{border: "solid 1px #777", width:"40%", height:"600px", frameborder: "0", scrolling: "no"}} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&showNav=1&showPrint=0&showCalendars=0&showTz=1&showTabs=1&showDate=1&mode=MONTH&title=GE%20Calendar"></iframe>
                <div className={styles.img} ></div>
                <div>
                    {/* <DatePicker /> */}
                </div>
                <div>
                    <h2>Schedule a time</h2>
                    <DatePicker
                        placeholderText='Select a Date and Time'
                        style={{color:"red"}} 
                        selected={values.date} 
                        minDate={new Date()} 
                        showTimeSelect
                        filterTime={filterPassedTime}
                        // timeFormat={}
                        excludeTimes={[
                            setHours(setMinutes(new Date(), 0), 19),
                            setHours(setMinutes(new Date(), 0), 20),
                            setHours(setMinutes(new Date(), 0), 21),
                            setHours(setMinutes(new Date(), 0), 22),
                            setHours(setMinutes(new Date(), 30), 22),
                            setHours(setMinutes(new Date(), 0), 23),
                            setHours(setMinutes(new Date(), 30), 23),
                            setHours(setMinutes(new Date(), 0), 24),
                            setHours(setMinutes(new Date(), 30), 24),
                        ]}
                        onChange={onChange}
                        filterDate={values.noWeekEnds}/> 
                        
                    <button disabled={values.disabled} type="submit">Book</button>
                </div>
                <div>
                    <h2>Cancel</h2>
                    <button>Cancel if there is something scheduled</button>
                </div >
            </div>
        </div>

    );
}

export default DateRangePage;
