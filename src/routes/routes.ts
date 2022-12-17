import HomePage from '@/pages/HomePage';

import { SignUp } from '@/features/Registration';

const publicRoutes = [{ path: '/*', element: SignUp }];
const privateRoutes = [{ path: '/*', element: HomePage }];
const adminRoutes = [{ path: '/*', element: HomePage }];

export { publicRoutes, privateRoutes, adminRoutes };
