import React, { FC } from 'react';

import styled from 'styled-components';

interface DropDownProps {
	children: React.ReactNode;
	active: boolean;
}

const DropDown: FC<DropDownProps> = ({ children, active }) => {
	return (
		<DropDownWrapper>
			{active && <DropDownContent>{children}</DropDownContent>}
		</DropDownWrapper>
	);
};

const DropDownWrapper = styled.div`
	position: relative;
	display: inline-block;
`;
const DropDownContent = styled.div`
  position: absolute;
	right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
	padding: 10px;
	border-radius: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export default DropDown;
