import { useState } from "react";

import Button from "../uis/Button";

const InputForm = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();

		if(userName.trim().length === 0 || userAge.trim().length === 0 || +userAge < 1){
			props.throwError({
				title:"Invalid input",
				message:"Please provide a valid name and an age greater than 1"
			});
			return;
		}

		props.onAddUser({
			id: Math.random(),
			name: userName,
			age: +userAge,
		});

		setUserName("");
		setUserAge("");
	};

	const userNameHandler = (event) => {
		setUserName(event.target.value);
	};

	const userAgeHandler = (event) => {
		setUserAge(event.target.value);
	};

	return (
		<form className={props.className} onSubmit={submitHandler}>
			<div>
				<label>Username</label>
				<input onChange={userNameHandler} value={userName} type="text" />
			</div>
			<div>
				<label>Age (Years)</label>
				<input
					onChange={userAgeHandler}
					value={userAge}
					type="numbers"
					min="0"
					max="150"
				/>
			</div>
			<Button className="button" type="submit">
				Add User
			</Button>
		</form>
	);
};

export default InputForm;
