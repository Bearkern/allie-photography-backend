import { Router, Request, Response } from 'express';
import Portfolios from '../model/portfoliosModels';
import { Types } from 'mongoose';

const router = Router();

type AllPortfoliosData = {
  _id: Types.ObjectId,
  title: string,
};

type PhotosData = {
  url: string,
  title: string,
  description: string,
}

type PortfoliosData = {
  _id: Types.ObjectId,
  title: string,
  description: string,
  cover: string,
  is_enabled: boolean,
  photos: PhotosData[],
}

router.get('/', async (_, res: Response) => {
  const portfolios: PortfoliosData[] = await Portfolios.find();
  const allPortfolios: AllPortfoliosData[] = portfolios.map((portfolio: PortfoliosData) => ({
    _id: portfolio._id,
    title: portfolio.title,
  }));

  res.send(allPortfolios);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const portfolio = await Portfolios.find({
    _id: id
  });

  res.send(portfolio);
});

router.post('/', async (
  req: Request<{}, {}, PortfoliosData>,
  res: Response
) => {
  const data = req.body;

  const portfolio = await Portfolios.create({
    title: data.title,
    description: data.description,
    cover: data.cover,
    is_enabled: data.is_enabled,
    photos: data.photos,
  });

  res.send(portfolio);
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const portfolio = await Portfolios.findByIdAndUpdate({
    _id: id,
  }, {
    title: data.title,
    description: data.description,
    cover: data.cover,
    is_enabled: data.is_enabled,
    photos: data.photos,
  }, {
    new: true
  });

  res.send(portfolio);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const portfolio = await Portfolios.findByIdAndDelete({
    _id: id,
  });

  res.send({
    status: 'success',
    portfolio
  });
});

export default router;