import React, { useState } from 'react';

export const useChange = (data: any) => {
	const [input, setInput] = useState(data);
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	
	return [input, handleChange];
};
