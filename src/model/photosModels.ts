import mongoose from 'mongoose';

const photosSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, '照片為必填'],
  },
  title: String,
  description: String,
  create_date: {
    type: Date,
    default: Date.now(),
  },
}, {
  versionKey: false
});

const Photos = mongoose.model('Photos', photosSchema);
export default Photos;