import Home from '@/pages/Home';

import { SignIn, SignUp } from '@/features/Registration';

const publicRoutes = [
	{ path: '/signIn', element: SignIn },
	{ path: '/*', element: SignUp },
];
const privateRoutes = [{ path: '/*', element: Home }];
const adminRoutes = [{ path: '/*', element: Home }];

export { publicRoutes, privateRoutes, adminRoutes };
