import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { privateRoutes } from '@/routes/routes';
import Registration from '@/pages/Registration';

const AppRouter = () => {
	const authUser = false;

	return (
		<Routes>
			{authUser ? (
				privateRoutes.map((route) => (
					<Route
						path={route.path}
						element={<route.element />}
						key={route.path}
					/>
				))
			) : (
				<Route path='/*' element={<Registration />} />
			)}
		</Routes>
	);
};

export default AppRouter;
