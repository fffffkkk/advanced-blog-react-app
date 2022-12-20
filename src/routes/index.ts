import { RegistrationPage, HomePage } from '@/pages';

const privateRoutes = [{ path: '/*', element: HomePage }];
const publicRoutes = [{ path: '/*', element: RegistrationPage }];
const adminRoutes = [{ path: '/*', element: HomePage }];

export { publicRoutes, adminRoutes, privateRoutes };
