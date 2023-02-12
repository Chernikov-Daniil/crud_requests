export const USERS_DOWNLOAD = 'USERS_DOWNLOAD';
export const USERS_LOADING = 'USERS_LOADING';
export const USERS_ADD_USER = 'USERS_ADD_USER';
export const USERS_ADD_EPLOYEEID = 'USERS_ADD_EPLOYEEID';
export const USERS_DELETE_USER = 'USERS_DELETE_USER';
export const USERS_CHANGE_DATAFORM = 'USERS_CHANGE_DATAFORM';
export const USERS_PAST_DATA = 'USERS_PAST_DATA';
export const USERS_EDIT = 'USERS_EDIT';

export const getAllProfiles = (value) => ({
	type: USERS_DOWNLOAD,
	payload: value,
});

export const loading = (value) => ({
	type: USERS_LOADING,
	payload: value,
});

export const addUser = (value) => ({
	type: USERS_ADD_USER,
	payload: value,
});

export const addNewEployeedId = (value) => ({
	type: USERS_ADD_EPLOYEEID,
});

export const deleteUser = (userId) => ({
	type: USERS_DELETE_USER,
	payload: userId,
});

export const chnageDataForm = (obj) => ({
	type: USERS_CHANGE_DATAFORM,
	payload: obj,
});

export const pastDataUserInForm = (user) => ({
	type: USERS_PAST_DATA,
	payload: user,
});

export const editingUser = (user) => ({
	type: USERS_EDIT,
	payload: user,
});
