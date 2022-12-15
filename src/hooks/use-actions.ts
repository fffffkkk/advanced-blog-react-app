import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { userAction } from '@/store/user/user.slice';
import { gridAction } from '@/store/grid/grid.slice';
import { postsAction } from '@/store/posts/posts.slice';

const allActions = {
	...userAction,
	...gridAction,
	...postsAction,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
