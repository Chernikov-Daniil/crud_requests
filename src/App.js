import { CircularProgress, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import './App.css';
import Form from './components/Form/Form';
import UsersList from './components/UsersList/UsersList';
import { getAllProfiles, loading } from './store/Users/Actions';
import { getRequest } from './utils';

function App() {
	const progress = useSelector((state) => state.users.loading);

	const dispatch = useDispatch();

	const fetchUsers = () => {
		dispatch(loading(true));
		getRequest()
			.then((result) => {
				dispatch(getAllProfiles(result));
			})
			.catch((error) => console.log(error))
			.finally(() => {
				dispatch(loading(false));
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className='App'>
			{progress ? (
				<CircularProgress />
			) : (
				<>
					<Form />
					<UsersList />
				</>
			)}
		</div>
	);
}

export default App;
