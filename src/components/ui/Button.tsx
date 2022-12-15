import React, { FC } from 'react';

import styled from 'styled-components';

import { btnTypes } from '@/types/btn.type';

interface ButtonProps {
	type: btnTypes;
	click?: () => void
	children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ type, children , click}) => {
	return <ButtonWrapper type={type} onClick={click}>{children}</ButtonWrapper>;
};
const ButtonWrapper = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
	cursor: pointer;
  :active, :focus {
    outline: 0;
    border: 2px solid #0062a2;
  }
`

export default Button;
