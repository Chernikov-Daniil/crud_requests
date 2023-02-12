import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './Users/Reducer.js';

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});
