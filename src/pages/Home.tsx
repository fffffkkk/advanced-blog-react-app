import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Navbar, Feed } from '@/features/Home';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';

const Home = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/settings/:id' element={<Settings />} />
				<Route path='/profile/:id' element={<Profile />} />
				<Route path='/*' element={<Feed />} />
			</Routes>
		</>
	);
};

export default Home;
