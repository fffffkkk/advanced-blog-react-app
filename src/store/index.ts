import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { userReducer } from '@/store/user/user.slice';
import { gridReducer } from '@/store/grid/grid.slice';
import { usersAPI } from '@/store/user/user.api';
import { postAPI } from '@/store/posts/posts.api';

export const rootReducer = combineReducers({
	[usersAPI.reducerPath]: usersAPI.reducer,
	[postAPI.reducerPath]: postAPI.reducer,
	user: userReducer,
	grid: gridReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersAPI.middleware, postAPI.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;
