import React, { FC } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/store';

interface HelpersProviderProps {
	children: React.ReactNode;
}

const HelpersProvider: FC<HelpersProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default HelpersProvider;
