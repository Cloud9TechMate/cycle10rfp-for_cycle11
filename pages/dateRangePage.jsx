// import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import React, {useState} from 'react';
import styles from '../styles/dateRangePage.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
// import TimePicker from "react-time-picker";

const DateRangePage = () => {
    const a = new Date();
    console.log(a.getTime());
    
    const[values, setValues] = useState(
        {
            startDate: new Date(),
        }
        );
        
        /// if startDate = today
        console.log(values.startDate)
    const filterPassedTime = (time) => {
        console.log(time);
        const x = new Date();
        console.log(x);
        const selectedDate = new Date(time);
        const currentDate = values.startDate;
        
        const a = selectedDate.getDay()
        const b = selectedDate.getMonth();
        const c = selectedDate.getFullYear();
        const d = `${a} ${b} ${c}`;
        const e = x.getDay()
        const f = x.getMonth();
        const g = x.getFullYear();
        
        const h = `${e} ${f} ${g}`;

        
        
        if(d == h) {
            return currentDate.getTime() < selectedDate.getTime();
        }else{
            console.log("false");
            return currentDate.getTime() > selectedDate.getTime();
        }

    };

    const noWeeKEnds = (date) => {
        console.log(date);
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const onChange = (e) => {
        console.log(e)
        // setValues(e)
        setValues({...values, startDate: e})
    };  

    return (
        <div>
            <div style={{display: "flex"}}>
                {/* <iframe style={{border: "solid 1px #777", width:"40%", height:"600px", frameborder: "0", scrolling: "no"}} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&showNav=1&showPrint=0&showCalendars=0&showTz=1&showTabs=1&showDate=1&mode=MONTH&title=GE%20Calendar"></iframe> */}
                <iframe style={{border: "solid 1px #777", width:"40%", height:"600px", frameborder: "0", scrolling: "no"}} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTabs=1&title=Bookings&src=Y185YjVlMDlkMjYyZTExZjI4ZWFmNTgxZTkxOWVkZWZjNjMzZjUzZjljNjU2N2U1NjI1YWM1YWE4MTNhNDZhZDBlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%239E69AF"></iframe>
                <div className={styles.img} ></div>
                <div>
                    
                        <DatePicker 
                            filterDate={noWeeKEnds} 
                            selected={values.startDate} 
                            minDate={new Date} onChange={onChange}
                            showTimeSelect
                            filterTime={filterPassedTime}
                            excludeTimes={[
                                setHours(setMinutes(new Date(), 30), 17),
                                setHours(setMinutes(new Date(), 0), 18),
                                setHours(setMinutes(new Date(), 30), 18),
                                
                                setHours(setMinutes(new Date(), 0), 19),
                                setHours(setMinutes(new Date(), 30), 19),
                                setHours(setMinutes(new Date(), 0), 20),
                                setHours(setMinutes(new Date(), 30), 20),
                                setHours(setMinutes(new Date(), 0), 21),
                                setHours(setMinutes(new Date(), 30), 21),
                                setHours(setMinutes(new Date(), 0), 22),
                                setHours(setMinutes(new Date(), 30), 22),
                                setHours(setMinutes(new Date(), 0), 23),
                                setHours(setMinutes(new Date(), 30), 23),
                                setHours(setMinutes(new Date(), 0), 24),
                                setHours(setMinutes(new Date(), 30), 24),
                                setHours(setMinutes(new Date(), 30), 24),
                                setHours(setMinutes(new Date(), 0), 1),
                                setHours(setMinutes(new Date(), 30), 1),
                                setHours(setMinutes(new Date(), 0), 2),
                                setHours(setMinutes(new Date(), 30), 2),
                                setHours(setMinutes(new Date(), 0), 3),
                                setHours(setMinutes(new Date(), 30), 3),
                                setHours(setMinutes(new Date(), 0), 4),
                                setHours(setMinutes(new Date(), 30), 4),
                                setHours(setMinutes(new Date(), 0), 5),
                                setHours(setMinutes(new Date(), 30), 5),
                                ]}
                                />
                            <button onClick={() => alert("Your appointment has been booked")}>Book</button>
                            <h2>Cancel</h2>
                            <button>Cancel if there is something scheduled</button>
                </div>
                <div></div >
            </div>
        </div>
    );
}

export default DateRangePage;


