import React, { FC } from 'react';

import styled from 'styled-components';

import { inputTypes } from '@/types/input.type';

interface InputProps {
	type: inputTypes;
	value: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
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
			required={true}
		/>
	);
};

const StyledInput = styled.input<IStyledInput>`
	width: 100%;
	border-radius: 10px;
	border: none;
	padding: 5px 10px;
	background-color: ${(props) => (props.disabled ? 'transparent' : '')};
	:active,
	:focus {
		border: ${(props) => (props.disabled ? 'none' : '2px solid #0062a2')};
	}
`;

interface IStyledInput {
	disabled: boolean | undefined;
}

export default Input;
