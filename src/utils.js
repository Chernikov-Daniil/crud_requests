export const getRequest = async () => {
	try {
		const responce = await fetch('http://react-api.somee.com/api/Employee');
		return await responce.json();
	} catch (error) {
		console.log(error);
	}
};

export const deleteRequest = async (employeeId) => {
	try {
		const responce = await fetch(
			`http://react-api.somee.com/api/Employee/${employeeId}`,
			{
				method: 'DELETE',
			}
		);
		return await responce.json();
	} catch (error) {
		console.log(error);
	}
};

export const postRequest = async (user) => {
	try {
		const responce = await fetch('http://react-api.somee.com/api/Employee', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const result = await responce.json();
		console.log(result.message);
	} catch (error) {
		console.log(error);
	}
};

export const putRequest = async (user) => {
	try {
		const responce = await fetch('http://react-api.somee.com/api/Employee', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const result = await responce.json();
		console.log(result.message);
	} catch (error) {
		console.log(error);
	}
};