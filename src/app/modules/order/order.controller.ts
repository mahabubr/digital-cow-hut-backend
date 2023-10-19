import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { TOrder } from './order.interface';
import { OrderServices } from './order.services';

const createOrder = catAsync(async (req: Request, res: Response) => {
  const { ...orderData } = req.body;

  const result = await OrderServices.createOrder(orderData);

  sendResponse<TOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders placed successfully',
    data: result,
  });
});

const getAllOrders = catAsync(async (req: Request, res: Response) => {
  const result = await OrderServices.getAllOrders();

  sendResponse<TOrder[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrders,
};
