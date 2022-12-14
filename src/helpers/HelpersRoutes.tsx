import React, { FC } from 'react';

import { MemoryRouter } from 'react-router-dom';

interface HelpersRoutesProps {
	children: React.ReactNode;
}

const HelpersRoutes: FC<HelpersRoutesProps> = ({ children }) => {
	return <MemoryRouter>{children}</MemoryRouter>;
};

export default HelpersRoutes;
