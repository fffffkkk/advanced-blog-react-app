import React, { FC } from 'react';

import styled from 'styled-components';

import { inputTypes } from '@/types/input.type';

interface InputProps {
	type: inputTypes;
	value: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	placeholder?: string;
	disabled?: boolean;
	accept?: string;
}

const Input: FC<InputProps> = ({
	type,
	placeholder,
	value,
	change,
	name,
	disabled,
	accept
}) => {
	return (
		<StyledInput
			type={type}
			value={value}
			onChange={change}
			placeholder={placeholder}
			name={name}
			disabled={disabled}
			accept={accept}
		/>
	);
};

const StyledInput = styled.input`
	width: 100%;
	padding: 5px 10px;
	border-radius: 10px;
	border: none;
	background-color: ${(props) => (props.disabled ? 'transparent' : '')};
	:active,
	:focus {
		border: ${(props) => (props.disabled ? 'none' : '2px solid #0062a2')};
	}
`;

export default Input;
