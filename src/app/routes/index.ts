import express from 'express';
import { CowRouter } from '../modules/cow/cow.route';
import { UserRouter } from '../modules/user/user.route';
import { OrderRouter } from '../modules/order/order.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: UserRouter,
  },
  {
    path: '/',
    route: CowRouter,
  },
  {
    path: '/',
    route: OrderRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
