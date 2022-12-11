import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useTypedSelector } from '@/hooks/use-typed-selector';
import DropDown from '@/components/ui/DropDown';
import { useToggle } from '@/hooks/use-toggle';

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
	align-items: center;
	justify-content: center;
`;
const NavigationItem = styled.div`
	padding: 10px;
	cursor: pointer;
	border-radius: 15px;
	:hover {
		background-color: #41affa;
	}
`;
const UserImage = styled.div`
	width: 50px;
	height: 50px;
	background-color: #333333;
	border-radius: 50%;
`;

const Navbar: FC = () => {
	const { user } = useTypedSelector((state) => state.user);
	const [visible, setVisible] = useToggle();
	
	return (
		<NavbarWrapper>
			<NavbarInner>
				<NavbarTitle>BLOG</NavbarTitle>
				<NavbarNavigation>
					<NavigationItem>
						<Link role='nav' to='/'>
							home
						</Link>
					</NavigationItem>
					<NavigationItem>
						<Link onClick={setVisible} role='nav' to={`/profile/${user.id}`}>
							<UserImage>
								<DropDown active={visible}>text</DropDown>
							</UserImage>
						</Link>
					</NavigationItem>
				</NavbarNavigation>
			</NavbarInner>
		</NavbarWrapper>
	);
};

export default Navbar;
