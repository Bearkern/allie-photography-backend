import { Router, Request, Response } from 'express';
import Faqs from '../model/faqsModels';
import { ObjectId } from 'mongoose';

const router = Router();

type FaqsData = {
  _id: ObjectId,
  category: string,
  question: string,
  answer: string,
}

router.get('/', async (_, res: Response) => {
  const faqs: FaqsData[] = await Faqs.find();

  res.send(faqs);
});

router.post('/', async (
  req: Request<{}, {}, FaqsData>,
  res: Response
) => {
  const data = req.body;

  const faqs = await Faqs.create({
    category: data.category,
    question: data.question,
    answer: data.answer,
  });

  res.send(faqs);
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const faqs = await Faqs.findByIdAndUpdate({
    _id: id,
  }, {
    category: data.category,
    question: data.question,
    answer: data.answer,
  }, {
    new: true
  });

  res.send(faqs);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const faqs = await Faqs.findByIdAndDelete({
    _id: id,
  });

  res.send({
    status: 'success',
    faqs,
  });
});







export default router;