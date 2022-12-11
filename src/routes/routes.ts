import Home from '@/pages/Home';

import { SignUp } from '@/features/Registration';

const publicRoutes = [{ path: '/*', element: SignUp }];
const privateRoutes = [{ path: '/*', element: Home }];
const adminRoutes = [{ path: '/*', element: Home }];

export { publicRoutes, privateRoutes, adminRoutes };
