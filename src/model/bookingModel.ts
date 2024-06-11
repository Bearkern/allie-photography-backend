import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  photo_package: {
    type: String,
    required: [true, '方案名稱為必填'],
  },
  name: {
    type: String,
    required: [true, '姓名為必填'],
  },
  gender: {
    type: String,
    required: [true, '性別為必填'],
  },
  baby_gender: {
    type: String,
    required: [true, '寶寶性別為必填'],
  },
  address: {
    type: String,
    required: [true, '地址為必填'],
  },
  phone: {
    type: String,
    required: [true, '電話號碼為必填'],
  },
  email: {
    type: String
  },
  date: {
    type: String,
    required: [true, '預約日期為必填'],
  },
  time: {
    type: String,
    required: [true, '預約時間為必填'],
  },
  available_time: {
    type: String,
    required: [true, '可聯繫時間為必填'],
  },
  available_week: {
    type: String,
    required: [true, '平假日為必填'],
  },
  remark: {
    type: String
  },
}, {
  versionKey: false
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;