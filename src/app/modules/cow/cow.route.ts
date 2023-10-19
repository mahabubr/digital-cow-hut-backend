import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { CowController } from './cow.controller';
import { CowValidation } from './cow.validation';

const router = express.Router();

router.post(
  '/cows',
  validateRequest(CowValidation.createCowZodSchema),
  CowController.createCow
);

router.get('/cows', CowController.getAllCows);
router.get('/cows/:id', CowController.getSingleCow);
router.patch(
  '/cows/:id',
  validateRequest(CowValidation.updateCowZodSchema),
  CowController.updateCow
);
router.delete('/cows/:id', CowController.deleteCow);

export const CowRouter = router;
