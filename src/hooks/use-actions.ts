import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {userAction} from '@/store/user/user.slice';

const allActions = {
	...userAction,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
