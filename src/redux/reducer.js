import axios from 'axios';

const initialState = {
	user: {},
	isLoggedIn: false,
	selectedPack: {},
	addingGear: {}
};

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';
const SELECT_PACK = 'SELECT_PACK';
const ADD_GEAR = 'ADD_GEAR';

export function loginUser(user) {
	return {
		type: LOGIN_USER,
		payload: user
	};
}

export function logoutUser(user) {
	return {
		type: LOGOUT_USER,
		payload: initialState
	};
}

export function getUser() {
	const user = axios.get('/auth/user');
	return {
		type: GET_USER,
		payload: user
	};
}

export function selectPack(pack) {
	// console.log(pack);
	return {
		type: SELECT_PACK,
		payload: pack
	};
}

export function addGear(pack) {
	return {
		type: ADD_GEAR,
		payload: pack
	};
}

export default function(state = initialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			return { ...state, user: action.payload, isLoggedIn: true };
		case LOGOUT_USER:
			return { ...state, ...action.payload };
		case GET_USER + '_PENDING':
			return state;
		case GET_USER + '_FULFILLED':
			return { ...state, user: action.payload.data, isLoggedIn: true };
		case GET_USER + '_REJECTED':
			return initialState;

		// !----- selecting the pack ----!//

		case SELECT_PACK:
			return { ...state, selectedPack: action.payload };

		// !----adding gear to pack ----!//

		case ADD_GEAR:
			return { ...state, addingGear: action.payload };

		default:
			return state;
	}
}
