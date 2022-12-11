import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Navbar, Feed } from '@/features/Home';
import Profile from '@/pages/Profile';

const Home = ({}) => {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path='/*' element={<Feed />}/>
				<Route path='/profile/:id' element={<Profile />}/>
			</Routes>
		</>
	);
};

export default Home;
