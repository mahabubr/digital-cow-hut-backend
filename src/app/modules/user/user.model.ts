import { Schema, model } from 'mongoose';
import { role } from './user.constants';
import { TUser, UserModel } from './user.interface';

const userSchema = new Schema<TUser, UserModel>(
  {
    phoneNumber: { type: String, required: true, unique: true },
    role: { type: String, enum: role },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    address: { type: String, required: true },
    budget: { type: Number, required: true },
    income: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<TUser, UserModel>('User', userSchema);
