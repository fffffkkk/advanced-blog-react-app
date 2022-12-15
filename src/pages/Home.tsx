import React from 'react';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar } from '@/features/Home';
import { Profile, Settings, Feed, PostDetail } from '@/pages';
import { Sidebar } from '@/features/Feed';

const Home = () => {
	return (
		<>
			<Navbar />
			<HomeWrapper>
				<Sidebar />
				<Routes>
					<Route path='/settings/:id' element={<Settings />} />
					<Route path='/profile/:id' element={<Profile />} />
					<Route path={`/post/:id`} element={<PostDetail />} />
					<Route path='/*' element={<Feed />} />
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

export default Home;
