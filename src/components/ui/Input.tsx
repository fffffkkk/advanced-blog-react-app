import React, { FC } from 'react';

import { inputTypes } from '@/types/input.type';

interface InputProps {
	type: inputTypes;
	placeholder?: string;
	value: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
}

const Input: FC<InputProps> = ({ type, placeholder, value, change, name }) => {
	return (
		<input
			type={type}
			value={value}
			onChange={change}
			placeholder={placeholder}
			name={name}
		/>
	);
};

export default Input;
