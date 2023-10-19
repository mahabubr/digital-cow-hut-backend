'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserValidation = void 0;
const zod_1 = require('zod');
const user_constants_1 = require('./user.constants');
const createUserZodScheme = zod_1.z.object({
  body: zod_1.z.object({
    phoneNumber: zod_1.z.string({
      required_error: 'Phone number is required',
    }),
    role: zod_1.z.enum([...user_constants_1.role], {
      required_error: 'Role is required',
    }),
    password: zod_1.z.string({
      required_error: 'Password is required',
    }),
    name: zod_1.z.object({
      firstName: zod_1.z.string({
        required_error: 'First name is required',
      }),
      lastName: zod_1.z.string({
        required_error: 'Last name is required',
      }),
    }),
    address: zod_1.z.string({
      required_error: 'Address is required',
    }),
    budget: zod_1.z.number({
      required_error: 'Budget is required',
    }),
    income: zod_1.z.number({
      required_error: 'Income is required',
    }),
  }),
});
const updateUserZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    phoneNumber: zod_1.z.string().optional(),
    role: zod_1.z.string().optional(),
    password: zod_1.z.string().optional(),
    name: zod_1.z
      .object({
        firstName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().optional(),
      })
      .optional(),
    address: zod_1.z.string().optional(),
    budget: zod_1.z.number().optional(),
    income: zod_1.z.number().optional(),
  }),
});
exports.UserValidation = {
  createUserZodScheme,
  updateUserZodSchema,
};
