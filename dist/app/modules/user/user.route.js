'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest')
);
const user_controller_1 = require('./user.controller');
const user_validation_1 = require('./user.validation');
const router = express_1.default.Router();
router.post(
  '/auth/signup',
  (0, validateRequest_1.default)(
    user_validation_1.UserValidation.createUserZodScheme
  ),
  user_controller_1.UserController.createUser
);
router.get('/users', user_controller_1.UserController.getAllUsers);
router.get('/users/:id', user_controller_1.UserController.getSingleUser);
router.patch(
  '/users/:id',
  (0, validateRequest_1.default)(
    user_validation_1.UserValidation.updateUserZodSchema
  ),
  user_controller_1.UserController.updateUser
);
router.delete('/users/:id', user_controller_1.UserController.deleteUser);
exports.UserRouter = router;
