import React, { FC } from 'react';

import styled from 'styled-components';

import { inputTypes } from '@/types/input.type';

const InputWrapper = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  :active, :focus {
    outline: 0;
    border: 2px solid #0062a2;
  }
`

interface InputProps {
	type: inputTypes;
	placeholder?: string;
	value: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
}

const Input: FC<InputProps> = ({ type, placeholder, value, change, name }) => {
	return (
		<InputWrapper
			type={type}
			value={value}
			onChange={change}
			placeholder={placeholder}
			name={name}
		/>
	);
};

export default Input;
