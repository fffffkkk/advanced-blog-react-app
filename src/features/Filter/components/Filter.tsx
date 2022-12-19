import React, { FC } from 'react';

// interface FilterProps {
// };

const Filter: FC = () => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
	}
	
	return (
		<select onChange={handleChange}>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</select>
	);
};

export default Filter;
