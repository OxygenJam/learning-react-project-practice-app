import UserItem from "./UserItem";

const UserList = (props) => {
	let renderUser = <p>There are currently no users available</p>;

	if (props.items.length > 0) {
		renderUser = props.items.map((d) => {
			return <UserItem user={d} delete={props.onDelete} key={d.id}/>;
		});
	}

	return <div>{renderUser}</div>;
};

export default UserList;
