import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import './connections';
import cors from 'cors';

import indexRouter from './routes/index';
import faqsRouter from './routes/faqs';
import portfoliosRouter from './routes/portfolios';
import photoPackagesRouter from './routes/photoPackages';
import bookingRouter from './routes/booking';
import photosRouter from './routes/photos'

const app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3001'
}))

app.use('/', indexRouter);
app.use('/faqs', faqsRouter);
app.use('/portfolios', portfoliosRouter);
app.use('/photoPackages', photoPackagesRouter);
app.use('/booking', bookingRouter);
app.use('/photos', photosRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
