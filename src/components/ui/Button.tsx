import React, { FC } from 'react';

import { btnTypes } from '@/types/btn.type';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 10px 5px;
  border-radius: 10px;
  border: none;
	cursor: pointer;
  :active, :focus {
    outline: 0;
    border: 2px solid #0062a2;
  }
`

interface ButtonProps {
	type: btnTypes;
	children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ type, children }) => {
	return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

export default Button;
