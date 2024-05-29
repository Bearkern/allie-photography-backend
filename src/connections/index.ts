import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const DB = process.env.MONGODB_CONNECT_STRING;

mongoose.connect(DB).then(() => console.log('✡ 資料庫連接成功 ✡'));
