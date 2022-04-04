
import styles from "./UserItem.module.css";

const UserItem = (props) => {
	const clickHandler = (event) => {
        props.delete(props.user);
    };
	
	return (
		<div className={styles.useritem} onClick={clickHandler}>
			<span>{props.user.name}</span>
			<span> ({props.user.age} years old)</span>
		</div>
	);
};

export default UserItem;
