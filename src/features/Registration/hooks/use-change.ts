import React, { useCallback, useState } from 'react';

//@ts-ignore
export const useChange = (data) => {
	const [input, setInput] = useState(data);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setInput({ ...input, [e.target.name]: e.target.value });
		},
		[input]
	);

	return [input, handleChange];
};
