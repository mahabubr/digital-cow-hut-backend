'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cow_route_1 = require('../modules/cow/cow.route');
const user_route_1 = require('../modules/user/user.route');
const order_route_1 = require('../modules/order/order.route');
const router = express_1.default.Router();
const moduleRoutes = [
  {
    path: '/',
    route: user_route_1.UserRouter,
  },
  {
    path: '/',
    route: cow_route_1.CowRouter,
  },
  {
    path: '/',
    route: order_route_1.OrderRouter,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
