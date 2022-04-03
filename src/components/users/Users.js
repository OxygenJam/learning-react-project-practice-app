import Card from "../uis/Card";
import UserList from "./UserList";

const Users = (props) =>{

    return (
        <Card>
            <UserList items={props.users} onDelete={props.removeUser}/>
        </Card>
    )
}

export default Users;