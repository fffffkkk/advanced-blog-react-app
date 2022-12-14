import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '@/hooks/use-auth';

const Sidebar: FC = () => {
	const { id } = useAuth();

	return (
		<SidebarWrapper>
			<SidebarInner>
				<SidebarList>
					<Link to='/'>
						<SidebarListItem>HOME</SidebarListItem>
					</Link>
					<Link to='/info'>
						<SidebarListItem>INFO</SidebarListItem>
					</Link>
					<Link to={`/profile/${id}`}>
						<SidebarListItem>PROFILE</SidebarListItem>
					</Link>
					<Link to='/'>
						<SidebarListItem>POSTS</SidebarListItem>
					</Link>
				</SidebarList>
				
			</SidebarInner>
		</SidebarWrapper>
	);
};

const SidebarWrapper = styled.div`
	width: 200px;
	height: max-content;
	background-color: #1ea7fd;
	border-radius: 15px;
`;
const SidebarInner = styled.div`
	padding: 10px;
`;
const SidebarList = styled.ul`
	list-style: none;
`;
const SidebarListItem = styled.li`
	padding: 5px;
	transition: background-color 0.3s ease-in-out;
	border-radius: 10px;
	cursor: pointer;
	:hover {
		background-color: #3b79ef;
	}
`;

export default Sidebar;
