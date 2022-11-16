import React, {useState} from "react";
import Card from "../components/card";
import Link from "next/link";
// import  styles from '../styles/index.module.css'
import styles from "../styles/forFormInput.module.css";

import ForFormInput from './forFormInput';
import FormInput from "../components/formInput";
import {useRouter} from "next/router";
// import { getServerSideProps } from "../pages/courtPage";
// import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
// import {a} from "../pages/courtPage";
// import prisma1 from "../lib/prisma1";
// import handle from "../pages/api/courtApi"


// const x = handle();
// console.log(x);

export const getServerSideProps = async() => {
		const res = await fetch("http://localhost:3000/api/courtApi");
		const court = await res.json();
		// console.log(court);
		return {
			props: {court},
		};
	}

	
export default function Court(court) {

	const [values, setValues] = useState({
		/// since we use useState hook here, its going to rerender our component each time the state is changed. Its not a 
		/// problem. but there is a solution. instead of using useState, we can use useRef hook
		username:"",
		email:"",
		birthDay:"",
		password:"",
		confirmPassword:"",
	}); 

	const inputs = [ /// these inputs are for the props
		{
			id:1,
			name:"username",
			type:"text",
			placeholder:"Full Name",
			errorMessage:"Full Name should be 3-16 characters and should not include any special characters!",
			label:"Full Name",
			pattern:"^[A-Za-z0-9 ]{3,16}$", /// remember the invalid in css
			required: true,
		},
		{
			id:2,
			name:"email",
			type:"email",
			placeholder:"Email",
			errorMessage:"Please input a valid email address!",
			label:"Email",
			required: true,
		},
		{
			id:3,
			name:"birthDay",
			type:"date",
			placeholder:"Birthday",
			label:"Birthday"
		},
		{
			id:4,
			name:"password",
			type:"password",
			placeholder:"Password",
			errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
			label:"Password",
			pattern:'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
			required: true,
		},
		{
			id:5,
			name:"confirmPassword",
			type:"password",
			placeholder:"Confirm Password",
			errorMessage:"Passwords do not match",
			label:"Confirm Password",
			pattern:values.password, /// we want the same password which is now stored in the values use state
			required: true,
		},
		
	];

	const router = useRouter(); ///for handleSubmit

	const myData = court.court;
	console.log(court.court)
	for(let item of myData) {
		console.log(item.COURT);
	};


	function handleSubmit(e) {
		e.preventDefault();
		for(let item of myData) {
			console.log(item);
			if(values.username === item.COURT && values.email === item.ROOM && values.password === item.BUILDING) {
				router.push("/dateRangePage")

			}
		};
	};

	const onChange = (e) => {
		
		console.log(e);
		setValues({...values, [e.target.name]: e.target.value});
	};
	console.log(values);


	return ( 
		<div>
			<h1>GE Desk Schedular</h1>
			{/* <button>{<Link href="http://localhost:3000/forFormInput"></Link>}</button> */}
			<div>
				<h3>If you have not registered yet, please do so here</h3>
				{<Link href="http://localhost:3000/forFormInput"><button>Register</button></Link>}
				{/* {<Link href="http://localhost:3000/forFormInput"><button>Register</button></Link>} */}
			</div>
			<div className={styles.app}>
				<form onSubmit={handleSubmit} >
					<h1 className={styles.register} >LogIn</h1>
					<div className={styles.imgcontainer}></div>
					<div>

						{/* <FormInput name="username" type="text" placeholder="Username" label="Username" value={values[inputs.name]} onChange={onChange} /> */}
						<FormInput {...inputs[0]} onChange={onChange} />
						<FormInput {...inputs[1]} onChange={onChange} />
						<FormInput {...inputs[3]} onChange={onChange} />
						<button className={styles.forFormInputButton}>Submit</button>
						{/* <Link href="http://localhost:3000/dateRangePage"><button className={styles.forFormInputButton}>Submit</button></Link> */}
					</div>
				</form>
			</div>
		</div>

     // <div cLassName="container">
		// 	<div className="row">
		// 	<Card
		// 		title = {<Link href = "http://localhost:3000/judgesPage">Courthouse</Link>}
		// 		// title={<a href = "http://localhost:3000/api/judges">Courthouse Offices</a>}
		// 		images="images/courthouse.png"
		// 		alt="courthouse"
				
		// 		/>
		// 	<Card
		// 		//"Job Opportunities"
		// 		title={<Link href="https://county.milwaukee.gov/EN/Human-Resources">Job Opportunities</Link>}
		// 		images="../images/Job-Free-PNG.png"
		// 		alt="Jobs"
		// 		// link = "https://county.milwaukee.gov/EN/Human-Resources"
		// 		/>
		// 	<Card
		// 		title={<Link href="https://county.milwaukee.gov/EN/News--Events/Events">Events</Link>}
		// 		images="../images/EVENTS.png"
		// 		alt="events"
		// 	/>
		// 	<Card
		// 		title={<Link href="http://localhost:3000/courtPage">COUNTY SERVICES</Link>}
		// 		images="../images/MilwaukeeCountyLogo.png"
		// 		alt="county"
				
		// 	/>
		// 	</div>
		// </div>            
		
    )
}

