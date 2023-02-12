import { height } from '@mui/system';
import {
	USERS_ADD_USER,
	USERS_ADD_EPLOYEEID,
	USERS_DOWNLOAD,
	USERS_LOADING,
	USERS_DELETE_USER,
	USERS_CHANGE_DATAFORM,
	USERS_PAST_DATA,
	USERS_EDIT,
} from './Actions.js';

const inititalStateForm = {
	employeeId: 0,
	firstName: '',
	lastName: '',
	birthday: new Date().toISOString(),
	height: 0,
};

const inititalState = {
	profiles: [],
	loading: false,
	generateId: 0,
	dataForm: inititalStateForm,
	editing: false,
};

export const usersReducer = (state = inititalState, action) => {
	switch (action.type) {
		case USERS_DOWNLOAD:
			return {
				...state,
				profiles: action.payload,
				generateId: action.payload.reduce((number, item) => {
					if (number < item.employeeId) {
						number = item.employeeId;
					}
					return number;
				}, 0),
			};
		case USERS_LOADING:
			return { ...state, loading: action.payload };
		case USERS_ADD_USER:
			return {
				...state,
				profiles: [...state.profiles, action.payload],
				dataForm: inititalStateForm,
			};
		case USERS_ADD_EPLOYEEID:
			return { ...state, generateId: state.generateId + 1 };
		case USERS_DELETE_USER:
			return {
				...state,
				profiles: state.profiles.filter(
					(user) => user.employeeId !== action.payload
				),
			};
		case USERS_CHANGE_DATAFORM:
			return { ...state, dataForm: { ...state.dataForm, ...action.payload } };
		case USERS_PAST_DATA:
			return {
				...state,
				editing: true,
				dataForm: {
					employeeId: action.payload.employeeId,
					firstName: action.payload.firstName,
					lastName: action.payload.lastName,
					birthday: action.payload.birthday,
					height: action.payload.height,
				},
			};
		case USERS_EDIT:
			return {
				...state,
				editing: false,
				profiles: state.profiles.map((user) => {
					if (user.employeeId === action.payload.employeeId) {
						return action.payload;
					}
					return user;
				}),
				dataForm: inititalStateForm,
			};
		default:
			return state;
	}
};
