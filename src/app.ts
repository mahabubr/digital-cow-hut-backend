import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();

// CORS
app.use(cors());

// PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/v1/', router);

// app.get('/',async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error("Testing")
//   // next("THis i s Error")
// //   console.log(x);
// });

// Global Error Handler
app.use(globalErrorHandler);

// Handle Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  });
  next();
});

export default app;
