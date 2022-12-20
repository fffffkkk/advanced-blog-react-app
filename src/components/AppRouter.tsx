import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useAuth } from '@/hooks/use-auth';
import { Spinner } from '@/components/ui';
import { lazily } from 'react-lazily';

const { RegistrationPage, HomePage } = lazily(() => import('@/pages'));

const AppRouter = () => {
	const { isAuth } = useAuth();

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				{isAuth ? (
					<Route path='/*' element={<HomePage />} />
				) : (
					<Route path='/*' element={<RegistrationPage />} />
				)}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
