import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import styled from 'styled-components';

import { Navbar } from '@/features/Home';
import { Sidebar } from '@/components';
import { Spinner } from '@/components/ui';

import { FeedPage } from '@/pages';

const { ProfilePage, SettingsPage, PostDetailPage } = lazily(() =>
	import('@/pages')
);

const HomePage = () => {
	
	return (
		<>
			<Navbar />
			<HomeWrapper>
				<Sidebar />
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path='/settings/:id' element={<SettingsPage />} />
						<Route path='/profile/:id' element={<ProfilePage />} />
						<Route path='/post/:id' element={<PostDetailPage />} />
						<Route path='/*' element={<FeedPage />} />
					</Routes>
				</Suspense>
			</HomeWrapper>
		</>
	);
};

const HomeWrapper = styled.div`
	margin-top: 50px;
	display: flex;
	gap: 50px;
`;

export default HomePage;
