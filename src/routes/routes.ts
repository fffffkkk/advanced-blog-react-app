import HomePage from '@/pages/HomePage';

import { SignUp } from '@/features/Registration';

const publicRoutes = [{ path: '/*', element: SignUp }];
const adminRoutes = [{ path: '/*', element: HomePage }];

export { publicRoutes, adminRoutes };
