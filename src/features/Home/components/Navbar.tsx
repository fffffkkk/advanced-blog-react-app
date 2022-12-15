import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useToggle } from '@/hooks/use-toggle';
import { useActions } from '@/hooks/use-actions';
import { useAuth } from '@/hooks/use-auth';
import { DropDown } from '@/components/ui';

const Navbar: FC = () => {
	const { id } = useAuth();
	const { removeUser } = useActions();
	const [visible, setVisible] = useToggle();

	const logOut = () => {
		removeUser();
	};

	return (
		<NavbarWrapper>
			<NavbarInner>
				<NavbarTitle>
					<Link to='/'>
						<NavigationText>BLOG</NavigationText>
					</Link>
				</NavbarTitle>
				<NavbarNavigation>
					{/*TODO: remove li in li this is mistake!*/}
					<NavigationItem role='dropdown' onClick={setVisible}>
						<UserImage>
							<DropDown active={visible}>
								<NavigationItem>
									<Link role='nav' to={`profile/${id}`}>
										Profile
									</Link>
								</NavigationItem>
								<NavigationItem>
									<Link role='nav' to={`settings/${id}`}>
										Settings
									</Link>
								</NavigationItem>
								<NavigationItem>
									<NavigationBtn onClick={logOut}>LogOut</NavigationBtn>
								</NavigationItem>
							</DropDown>
						</UserImage>
					</NavigationItem>
				</NavbarNavigation>
			</NavbarInner>
		</NavbarWrapper>
	);
};

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
const NavigationItem = styled.li`
	padding: 10px;
	cursor: pointer;
	border-radius: 15px;
	display: block;
	:hover {
		background-color: #41affa;
	}
`;
const NavigationText = styled.h1`
	font-size: 30px;
	font-weight: bold;
`;
const NavigationBtn = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
`;
const UserImage = styled.div`
	width: 50px;
	height: 50px;
	background-color: #333333;
	border-radius: 50%;
`;

export default Navbar;
