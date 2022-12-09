import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { IUser } from '@/models/IUser';

const USER_AUTH_KEY = 'jsauk';

interface UserState {
	user: IUser;
}

const initialState: UserState = {
	user: JSON.parse(localStorage.getItem(USER_AUTH_KEY) ?? '{}'),
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser(state, action: PayloadAction<IUser>) {
			state.user.id = action.payload.id;
			state.user.name = action.payload.name;
			state.user.token = action.payload.token;
			localStorage.setItem(USER_AUTH_KEY, JSON.stringify(state.user));
		},
		removeUser(state) {
			state.user.id = 0;
			state.user.name = '';
			state.user.token = '';
			localStorage.setItem(USER_AUTH_KEY, JSON.stringify(state.user));
		},
	},
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
