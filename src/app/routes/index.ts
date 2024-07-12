import express from 'express';
import { UserRouter } from '../modules/USER/user.route';

import { ImageRoutes } from '../modules/Image/image.route';
import { AuthRouter } from '../modules/AUTH/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/image',
    route: ImageRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
