import mongoose from 'mongoose';

const portfoliosSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: [true, '作品集名稱為必填'],
  },
  description: {
    type: String,
    required: [true, '作品集描述為必填'],
  },
  cover_url: {
    type: String,
    required: [true, '封面為必填'],
  },
  is_enabled: {
    type: Boolean,
    default: false,
  },
  photos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photos',
  }],
});

const Portfolios = mongoose.model('Portfolios', portfoliosSchema);
export default Portfolios;