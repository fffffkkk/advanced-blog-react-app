import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTypedSelector } from '@/hooks/use-typed-selector';

const NavbarWrapper = styled.header`
	width: 100%;
	height: 75px;
	background-color: #1ea7fd;
	border-radius: 0 0 15px 15px;
	padding: 0 10px 0 10px;
`;
const NavbarInner = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const NavbarTitle = styled.h1`
	font-weight: bold;
	font-size: 30px;
	padding: 10px;
	cursor: pointer;
	border-radius: 15px;
	:hover {
		background-color: #41affa;
	}
`;
const NavbarNavigation = styled.nav`
	display: flex;
`;
const NavigationItem = styled.div`
	padding: 10px;
	cursor: pointer;
	border-radius: 15px;
	:hover {
		background-color: #41affa;
	}
`;

const Navbar: FC = () => {
	const { user } = useTypedSelector((state) => state.user);

	return (
		<NavbarWrapper>
			<NavbarInner>
				<NavbarTitle>BLOG</NavbarTitle>
				<NavbarNavigation>
					<NavigationItem>
						<Link role='nav' to='/'>home</Link>
					</NavigationItem>
					<NavigationItem>
						<Link role='nav' to={`/profile/${user.id}`}>profile</Link>
					</NavigationItem>
				</NavbarNavigation>
			</NavbarInner>
		</NavbarWrapper>
	);
};

export default Navbar;
