/// Originally this code was on the App.js page. I am doing so many form tutorials that I wanted to just use
/// the App.js just to render all my apps. So, I moved this code to its own page.

import React, { useState } from "react";
import FormInput from "../components/formInput";
import styles from "../styles/forFormInput.module.css";
import {useNavigate} from "react-router-dom";

const ForFormInput = () => {
	const [values, setValues] = useState({
		/// since we use useState hook here, its going to rerender our component each time the state is changed. Its not a
		/// problem. but there is a solution. instead of using useState, we can use useRef hook
		username: "",
		email: "",
		birthDay: "",
		password: "",
		confirmPassword: "",
	});

	const inputs = [
		/// these inputs are for the props
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Full Name",
			errorMessage:"Full Name should be 3-16 characters and should not include any special characters!",
			label: "Full Name",
			pattern: "^[A-Za-z0-9]{3,16}$", /// remember the invalid in css
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "Email",
			errorMessage: "Please input a valid email address!",
			label: "Email",
			required: true,
		},
		{
			id: 3,
			name: "birthDay",
			type: "date",
			placeholder: "Birthday",
			label: "Birthday",
		},
		{
			id: 4,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage:
				"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
			label: "Password",
			pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
			required: true,
		},
		{
			id: 5,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			errorMessage: "Passwords do not match",
			label: "Confirm Password",
			pattern: values.password, /// we want the same password which is now stored in the values use state
			required: true,
		},
		
	];

	function handleSubmit(e) {
		e.preventDefault();
		console.log("test")
	}

	const onChange = (e) => {
		console.log(e);
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	console.log(values);

	return (
		<div className={styles.app}>
			<form 
				className={styles.forFormInput}
				onSubmit={handleSubmit}
				
				// onSubmit={(e) => {
				// 	e.preventDefault();
				// 	console.log("test");
				// 	///just checking to see if this link works
				// 	<Link href="http://localhost:3000/courtPage"></Link>
				// }}
				>

				<h1 className={styles.register}>Register</h1>
				<div className={styles.imgcontainer}></div>
				{/* <FormInput name="username" type="text" placeholder="Username" label="Username" /> */}
				<div className={styles.FormInput}>
					{inputs.map((input) => (
						<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
						/>
					))}
				</div>
				<button className={styles.forFormInputButton}>Submit</button>
				
			</form>
		</div>
	);
};

export default ForFormInput;
