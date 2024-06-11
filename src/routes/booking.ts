import { Router, Request, Response } from 'express';
import Booking from '../model/bookingModel';
import { Types } from 'mongoose';

const router = Router();

type BookingData = {
  _id: Types.ObjectId,
  photo_package: string,
  name: string,
  gender: string,
  baby_gender: string,
  address: string,
  phone: string,
  email: string,
  date: string,
  time: string,
  available_time: string,
  available_week: string,
  remark: string,
}

router.get('/', async (_, res: Response) => {
  const bookings = await Booking.find();

  res.send(bookings);
});

router.post('/', async (req: Request, res: Response) => {
  const data = req.body;

  const booking = await Booking.create({
    photo_package: data.photo_package,
    name: data.name,
    gender: data.gender,
    baby_gender: data.baby_gender,
    address: data.address,
    phone: data.phone,
    email: data.email,
    date: data.date,
    time: data.time,
    available_time: data.available_time,
    available_week: data.available_week,
    remark: data.remark,
  });

  res.send(booking);
});

export default router;