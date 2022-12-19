import React, { FC } from 'react';
import { HelpersProvider, HelpersRoutes } from '@/helpers/index';

interface RenderWithProviderRouterProps {
	children: React.ReactNode;
}

const RenderWithProviderRouter: FC<RenderWithProviderRouterProps> = ({
	children,
}) => {
	return (
		<HelpersProvider>
			<HelpersRoutes>{children}</HelpersRoutes>
		</HelpersProvider>
	);
};

export default RenderWithProviderRouter;
