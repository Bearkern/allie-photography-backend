import mongoose from 'mongoose';

const packagesSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: [true, '方案名稱為必填'],
  },
  price: {
    type: Number,
    required: [true, '價格為必填'],
  },
  cover_url: {
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
});

const Packages = mongoose.model('Packages', packagesSchema);
export default Packages;