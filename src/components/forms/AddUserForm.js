import Card from "../uis/Card";
import InputForm from "./InputForm";

import styles from "./AddUserForm.module.css";
import Modal from "../uis/Modal";
import { useState } from "react";

const AddUserForm = (props) => {
    const [errorState, setErrorState] = useState(false);

    const showError = (err) =>{
        setErrorState(err)
    }

    const closeError = () =>{
        setErrorState(undefined);
    }

	return (
		<Card>
			{errorState && <Modal title={errorState.title} message={errorState.message} onConfirm={closeError}/>}
			<InputForm className={styles.input} onAddUser={props.addUser} throwError={showError}/>
		</Card>
	);
};

export default AddUserForm;
