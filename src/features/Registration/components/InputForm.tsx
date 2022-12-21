import React, { FC } from 'react';

import styled from 'styled-components';

import { Input } from '@/components/ui';
import { inputTypes } from '@/types/input.type';

interface InputFormProps {
	name: string;
	type: inputTypes;
	value: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: FC<InputFormProps> = ({ name, type, value, change }) => {
	return (
		<Label>
			Введите {type}:
			<Input
				type={type}
				value={value}
				change={change}
				name={name}
			/>
		</Label>
	);
};

const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	padding-bottom: 10px;
	font-size: 20px;
	font-weight: bolder;
`;

export default InputForm;
