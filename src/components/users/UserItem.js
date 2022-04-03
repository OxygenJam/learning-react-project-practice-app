const UserItem = (props) => {
	const clickHandler = (event) => {
        props.delete(props.user);
    };
	
	return (
		<div onClick={clickHandler} key={props.user.id}>
			<span>{props.user.name}</span>
			<span>{props.user.age}</span>
		</div>
	);
};

export default UserItem;
