import mongoose from 'mongoose';

const faqsSchema = new mongoose.Schema({
  id: String,
  category: {
    type: String,
    required: [true, '類別為必填'],
  },
  question: {
    type: String,
    required: [true, '問題為必填'],
  },
  answer: {
    type: String,
    required: [true, '回答為必填'],
  },
});

const Faqs = mongoose.model('Faqs', faqsSchema);
export default Faqs;