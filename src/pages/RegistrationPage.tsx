import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from '@/routes/routes';

const RegistrationPage = () => {
	return (
		<Routes>
			{publicRoutes.map((route) => (
				<Route path={route.path} element={<route.element />} key={route.path} />
			))}
		</Routes>
	);
};

export default RegistrationPage;
