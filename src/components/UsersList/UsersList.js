import { useSelector } from 'react-redux';
import User from '../User/User';
import './UsersList.css';

const UsersList = (props) => {
	const users = useSelector((state) => state.users.profiles);
	return (
		<div className='containerUsers'>
			<h2>Users:</h2>
			<div className='usersList'>
				{!!users.length &&
					users.map((user) => <User key={user.employeeId} user={user} />)}
			</div>
		</div>
	);
};

export default UsersList;
