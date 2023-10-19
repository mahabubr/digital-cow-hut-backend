import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/auth/signup',
  validateRequest(UserValidation.createUserZodScheme),
  UserController.createUser
);

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getSingleUser);
router.patch(
  '/users/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);
router.delete('/users/:id', UserController.deleteUser);

export const UserRouter = router;
