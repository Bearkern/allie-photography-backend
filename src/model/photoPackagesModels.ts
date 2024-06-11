import mongoose from 'mongoose';

const photoPackagesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '方案名稱為必填'],
  },
  price: {
    type: Number,
    required: [true, '價格為必填'],
  },
  cover: {
    type: String,
    required: [true, '封面為必填'],
  },
  content: {
    type: [String],
    required: [true, '方案內容為必填'],
  },
  detail: {
    type: [String],
    required: [true, '詳細內容為必填'],
  },
  notice: {
    type: String,
    required: [true, '注意事項為必填'],
  },
  photos: {
    type: [String],
    required: [true, '照片為必填']
  },
}, {
  versionKey: false
});

const collectionName = 'photoPackages'
const PhotoPackages = mongoose.model('photoPackages', photoPackagesSchema, collectionName);
export default PhotoPackages;