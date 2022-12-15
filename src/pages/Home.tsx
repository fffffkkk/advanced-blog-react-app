import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Navbar } from '@/features/Home';
import { Profile, Settings, Feed, PostDetail } from '@/pages';

const Home = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/settings/:id' element={<Settings />} />
				<Route path='/profile/:id' element={<Profile />} />
				<Route path={`/post/:id`} element={<PostDetail />} />
				<Route path='/*' element={<Feed />} />
			</Routes>
		</>
	);
};

export default Home;
