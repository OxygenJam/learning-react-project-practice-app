import Card from "../uis/Card";
import InputForm from "./InputForm";

const AddUserForm = (props) =>{
    return (
        <Card>
            <InputForm onAddUser={props.addUser}/>
        </Card>
    )
}

export default AddUserForm;