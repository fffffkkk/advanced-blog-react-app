import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { userAction } from '@/store/user/user.slice';
import { gridAction } from '@/store/grid/grid.slice';

const allActions = {
	...userAction,
	...gridAction,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
