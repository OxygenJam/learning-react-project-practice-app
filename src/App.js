

import Users from "./components/users/Users";
import { useState } from "react";
import AddUserForm from "./components/forms/AddUserForm";

function App() {
	const [registeredUsers, setRegisteredUsers] = useState([]);

	const removeUserHandler = (user) => {
		console.log("REM", user);
		setRegisteredUsers((previousArr) => {
			return previousArr.filter((d) => {
				return +d.id != +user.id;
			});
		});
	};

	const addUserHandler = (user) => {
		console.log("ADD",user);
		setRegisteredUsers((previousArr) => {
			return [user, ...previousArr];
		});
	};

	return (
		<div className="App">
			<AddUserForm addUser={addUserHandler} />
			<Users removeUser={removeUserHandler} users={registeredUsers} />
		</div>
	);
}

export default App;
