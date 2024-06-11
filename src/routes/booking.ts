import { Router, Request, Response } from 'express';
import Booking from '../model/bookingModel';
import { Types } from 'mongoose';

const router = Router();

type BookingData = {
  _id: Types.ObjectId,
  package: string,
  name: string,
  gender: string,
  babyGender: string,
  address: string,
  phone: string,
  email: string,
  date: string,
  time: string,
  availableTime: string,
  availableWeek: string,
  remark: string,
}

router.get('/', async (_, res: Response) => {
  const bookings = await Booking.find();

  res.send(bookings);
});

router.post('/', async (req: Request, res: Response) => {
  const data = req.body;

  const booking = await Booking.create({
    photoPackage: data.photoPackage,
    name: data.name,
    gender: data.gender,
    babyGender: data.babyGender,
    address: data.address,
    phone: data.phone,
    email: data.email,
    date: data.date,
    time: data.time,
    availableTime: data.availableTime,
    availableWeek: data.availableWeek,
    remark: data.remark,
  });

  res.send(booking);
});

export default router;