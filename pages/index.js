import React, {useState} from "react";
import Card from "../components/card";
import Link from "next/link";
// import  styles from '../styles/index.module.css'
import styles from "../styles/forFormInput.module.css";

import ForFormInput from '../pages/forFormInput';
import FormInput from "../components/formInput";
import {useRouter} from "next/router";
import { useNavigate } from "react-router-dom";

export const getServerSideProps = async() => {
		const res = await fetch("http://localhost:3000/api/courtApi");
		const court = await res.json();
		// console.log(court);
		return {
			props: {court},
		};
	}

	
export default function Court(court) { /// passing in the props from the function above^

	const [values, setValues] = useState({
		username:"",
		email:"",
		birthDay:"",
		password:"",
		confirmPassword:"",
		sso:"",
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
		{
			id:6,
			name: "sso",
			type: "text",
			placeholder:"SSO",
			errorMessage:"SSO number is incorrect",
			label:"SSO",
			pattern: '^[0-9]+$', /// only numbers
			required: true,
		}
	];

	/// Auth /// TODO: I had a problem here where i did: for(let item of myData) > if > else {alert()}. The alert kept repeating, because I was looping thru the array. 
	const router = useRouter(); ///for handleSubmit
	
	function handleSubmit(e) {
		const myData = court.court;
		e.preventDefault();
		
		let specificObject; /// when the comparisons are true this variable will be assigned that specific object that
		/// the comparisons were ture in.

		for(let item of myData) {
			// console.log(item);
			if(item.BUILDING === values.sso && item.ROOM === values.email && item.PASS === values.password) {
				specificObject = item;
			}
		};
		
		console.log(specificObject); /// I have the specific object so I do not have to itterate thru an array of objects
		
		if(specificObject == undefined) {/// the values were not correct and specificObject is undefined
			alert("Your login information is not correct. Please try again.");
		}
		else{ /// the values are correct, specificObject is now has a value of the object we want to iterate thru. we no longer will have to
			///thru a whole array of objects.
			router.push('/dateRangePage');
		}
	};

	const onChange = (e) => {
		// console.log(e);
		setValues({...values, [e.target.name]: e.target.value});
	};
	console.log(values);


	return ( 
		<div>
			<h1>GE Desk Schedular</h1>
			<div>
				<h3>If you have not registered yet, please do so here</h3>
				{<Link href="http://localhost:3000/forFormInput"><button>Register</button></Link>}
			</div>
			<div className={styles.app}>
				<form onSubmit={handleSubmit} >
					<h1 className={styles.register} >LogIn</h1>
					<div className={styles.imgcontainer}></div>
					<div>
						<FormInput {...inputs[5]} onChange={onChange}/>
						<FormInput {...inputs[1]} onChange={onChange} />
						<FormInput {...inputs[3]} onChange={onChange} />
						<button className={styles.forFormInputButton}>Submit</button>
					</div>
				</form>
			</div>
		</div>
    )
}

