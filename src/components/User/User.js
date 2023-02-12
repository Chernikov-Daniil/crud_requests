import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, pastDataUserInForm } from '../../store/Users/Actions';
import { deleteRequest } from '../../utils';
import './User.css';

const User = memo(({ user }) => {
	const dispatch = useDispatch();

	const handleDeleteUser = () => {
		deleteRequest(user.employeeId);
		dispatch(deleteUser(user.employeeId));
	};

	const handleEditUser = () => {
		dispatch(pastDataUserInForm(user));
	};

	return (
		<Card className='userBox'>
			<CardContent>
				<Typography className='item'>firstName: {user.firstName}</Typography>
				<Typography className='item'>lastName: {user.lastName}</Typography>
				<Typography className='item'>
					birthday: {new Date(user.birthday).toLocaleDateString()}
				</Typography>
				<Typography className='item'>height: {user.height}</Typography>
				<CardActions>
					<Button size='small' onClick={handleEditUser}>
						Edit
					</Button>
					<Button size='small' onClick={handleDeleteUser}>
						Delete
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
});

export default User;
