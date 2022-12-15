import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPost } from '@/models/IPost';

const initialState: IPost = {
	countWatch: 0,
	id: '',
	date: '',
	author: { authorImage: '', authorName: '' },
	image: '',
	categories: [''],
	title: '',
	desc: '',
};

export const postsSlice = createSlice({
	name: 'grid',
	initialState,
	reducers: {
		addPosts(state, action: PayloadAction<IPost>) {
			state.countWatch = action.payload.countWatch;
			state.id = action.payload.id;
			state.date = action.payload.date;
			state.author = action.payload.author;
			state.image = action.payload.image;
			state.categories = action.payload.categories;
			state.title = action.payload.title;
			state.desc = action.payload.desc;
		},
		removePosts(state) {
			state.countWatch = 0;
			state.id = '';
			state.date = '';
			state.author = { authorImage: '', authorName: '' };
			state.image = '';
			state.categories = [''];
			state.title = '';
			state.desc = '';
		},
	},
});

export const postsReducer = postsSlice.reducer;
export const postsAction = postsSlice.actions;
