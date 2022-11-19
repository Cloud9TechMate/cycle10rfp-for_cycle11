// import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import React, {useState} from 'react';
import styles from '../styles/dateRangePage.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const DateRangePage = () => {

    
        // const [startDate, setStartDate] = useState();
        
        // const isWeekday = (date) => {
        //     console.log(date);
        //     const day = date.getDay();
        //     return day !== 0 && day !== 6;
        // };

        // console.log(startDate);
        
        // // function onChange(date) {
        // //     console.log(date);
        // //     // setStartDate(date);
        // // }

        // const onChange = (date) => {
        //     console.log(date);
        //     // setStartDate(date);
        // }

        // return (
        //     <div>

        //     <DatePicker
        //     selected={startDate}
        //     onChange={onChange}
        //     filterDate={isWeekday}
        //     placeholderText="Select a weekday"
        //     />
        //     </div>
        // );
    
    // const [values, setValues] = useState(new Date());
    // console.log(startDate);
    const [values, setValues] = useState(
        {
            date:"",
            noWeekEnds: function (date) {
                // console.log(date);
                const day = date.getDay();
                return day !== 0 && day !== 6;
            },
            // time: setHours(setMinutes(new Date(), 0), 9),

        }
    );
        console.log({...values});

        const filterPassedTime = (time) => {
            console.log(time);
            const currentDate = new Date();
            const selectedDate = new Date(time);
            return currentDate.getTime() < selectedDate.getTime();
        };

    const onChange = (e) => {
        console.log(e);
        setValues({...values, date: e,}); /// spread the values, key: value pair that you would like to change
        console.log({...values})
	};
    

    return (
        
        <div>
            <div style={{display: "flex"}}>
                <iframe style={{border: "solid 1px #777", width:"40%", height:"600px", frameborder: "0", scrolling: "no"}} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&showNav=1&showPrint=0&showCalendars=0&showTz=1&showTabs=1&showDate=1&mode=MONTH&title=GE%20Calendar"></iframe>
                <div className={styles.img} ></div>
                <div>
                    <h2>Schedule a time</h2>
                    <DatePicker
                        placeholderText='Select a Date and Time'
                        style={{color:"red"}} 
                        selected={values.date} 
                        minDate={new Date()} 
                        showTimeSelect
                        filterTime={filterPassedTime}
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
