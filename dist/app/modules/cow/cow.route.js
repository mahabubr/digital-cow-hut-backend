'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CowRouter = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest')
);
const cow_controller_1 = require('./cow.controller');
const cow_validation_1 = require('./cow.validation');
const router = express_1.default.Router();
router.post(
  '/cows',
  (0, validateRequest_1.default)(
    cow_validation_1.CowValidation.createCowZodSchema
  ),
  cow_controller_1.CowController.createCow
);
router.get('/cows', cow_controller_1.CowController.getAllCows);
router.get('/cows/:id', cow_controller_1.CowController.getSingleCow);
router.patch(
  '/cows/:id',
  (0, validateRequest_1.default)(
    cow_validation_1.CowValidation.updateCowZodSchema
  ),
  cow_controller_1.CowController.updateCow
);
router.delete('/cows/:id', cow_controller_1.CowController.deleteCow);
exports.CowRouter = router;
