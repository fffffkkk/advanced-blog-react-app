import React from 'react';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar } from '@/features/Home';
import { ProfilePage, SettingsPage, FeedPage, PostDetailPage } from '@/pages';
import { Sidebar } from '@/components';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HomeWrapper>
				<Sidebar />
				<Routes>
					<Route path='/settings/:id' element={<SettingsPage />} />
					<Route path='/profile/:id' element={<ProfilePage />} />
					<Route path='/post/:id' element={<PostDetailPage />} />
					<Route path='/*' element={<FeedPage />} />
				</Routes>
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
