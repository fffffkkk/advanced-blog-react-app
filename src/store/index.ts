import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { userReducer } from '@/store/user/user.slice';
// import {playlistAPI} from "@/services/playlistService";

export const rootReducer = combineReducers({
	// [playlistAPI.reducerPath]: playlistAPI.reducer,
	user: userReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(playlistAPI.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;
