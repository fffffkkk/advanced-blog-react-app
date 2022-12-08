import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '@/routes/routes';

const AppRouter = () => {
	const authUser = false;

	return (
		<Routes>
			{authUser
				? privateRoutes.map((route) => (
						<Route
							path={route.path}
							element={<route.element />}
							key={route.path}
						/>
				  ))
				: publicRoutes.map((route) => (
						<Route
							path={route.path}
							element={<route.element />}
							key={route.path}
						/>
				  ))}
		</Routes>
	);
};

export default AppRouter;
