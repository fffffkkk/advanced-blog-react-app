import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { privateRoutes } from '@/routes/routes';
import { useAuth } from '@/hooks/use-auth';
import RegistrationPage from '@/pages/RegistrationPage';

const AppRouter = () => {
	const {isAuth} = useAuth();

	return (
		<Routes>
			{isAuth ? (
				privateRoutes.map((route) => (
					<Route
						path={route.path}
						element={<route.element />}
						key={route.path}
					/>
				))
			) : (
				<Route path='/*' element={<RegistrationPage />} />
			)}
		</Routes>
	);
};

export default AppRouter;
