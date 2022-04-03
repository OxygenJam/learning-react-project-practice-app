import { useState } from "react";

const InputForm = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();

		props.onAddUser({
			id: Math.random(),
			name: userName,
			age: userAge,
		});
	};

	const userNameHandler = (event) => {
		setUserName(event.target.value);
	};

	const userAgeHandler = (event) => {
		setUserAge(+event.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>Username</label>
				<input onChange={userNameHandler} type="text" />
			</div>
			<div>
				<label>Age (Years)</label>
				<input onChange={userAgeHandler} type="numbers" min="0" max="150" />
			</div>
			<button className="button" type="submit">
				Add User
			</button>
		</form>
	);
};

export default InputForm;
