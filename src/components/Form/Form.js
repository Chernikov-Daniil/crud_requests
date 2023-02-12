import { Button, FormControl, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import {
	addNewEployeedId,
	addUser,
	chnageDataForm,
	editingUser,
} from '../../store/Users/Actions';
import { postRequest, putRequest } from '../../utils';

import './Form.css';

const Form = (props) => {
	const [value, setValue] = useState();
	const { generateId, editing } = useSelector((state) => state.users);

	const { firstName, lastName, birthday, height, employeeId } = useSelector(
		(state) => state.users.dataForm
	);

	const dispatch = useDispatch();

	const handleSubmit = () => {
		const body = {
			employeeId: employeeId,
			firstName: firstName,
			lastName: lastName,
			birthday: birthday,
			height: height,
		};
		if (!editing) {
			postRequest(body);

			batch(() => {
				dispatch(addUser({ ...body, employeeId: generateId + 1 }));
				dispatch(addNewEployeedId());
			});
		} else {
			putRequest(body);

			dispatch(editingUser(body));
		}
	};

	const handleChangeProperty = (event, property) => {
		const value = event.currentTarget.value.trim();
		dispatch(
			chnageDataForm({ [property]: property === 'height' ? +value : value })
		);
	};

	useEffect(() => {
		if (editing) {
			setValue(birthday);
		}
	}, [editing]);
    
	return (
		<div>
			<div className='formContainer'>
				<h2>Form for new user</h2>
				<FormControl className='wrp'>
					<TextField
						id='outlined-basic'
						label='firstName'
						variant='outlined'
						value={firstName}
						onChange={(event) => handleChangeProperty(event, 'firstName')}
					/>
					<TextField
						id='outlined-basic'
						label='lastName'
						variant='outlined'
						value={lastName}
						onChange={(event) => handleChangeProperty(event, 'lastName')}
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label='Birthday'
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
								dispatch(
									chnageDataForm({ birthday: new Date(newValue).toISOString() })
								);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					<TextField
						id='outlined-basic'
						label='height'
						variant='outlined'
						type='number'
						value={height}
						onChange={(event) => handleChangeProperty(event, 'height')}
					/>
					<Button onClick={handleSubmit}>SUBMIT</Button>
				</FormControl>
			</div>
		</div>
	);
};

export default Form;
