import React from 'react';

import AppRouter from '@/components/AppRouter';
import ContentLayout from '@/layouts/ContentLayout';

const App = () => {
	return (
		<ContentLayout>
			<AppRouter />
		</ContentLayout>
	);
};

export default App;
