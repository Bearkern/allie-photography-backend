import { Router, Request, Response } from 'express';
import Photos from '../model/photosModels';
import { Types } from 'mongoose';

const router = Router();

type PhotosData = {
  _id: Types.ObjectId,
  url: string,
  title: string,
  description: string,
  create_date: string,
}

router.get('/', async (_, res: Response) => {
  const photos: PhotosData[] = await Photos.find();

  res.send(photos);
});

router.post('/', async (
  req: Request<{}, {}, PhotosData>,
  res: Response
) => {
  const data = req.body;

  const photos = await Photos.create({
    url: data.url,
    title: data.title,
    description: data.description,
  });

  res.send(photos);
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const photos = await Photos.findByIdAndUpdate({
    _id: id,
  }, {
    url: data.url,
    title: data.title,
    description: data.description,
  }, {
    new: true
  });

  res.send(photos);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const photos = await Photos.findByIdAndDelete({
    _id: id,
  });

  res.send({
    status: 'success',
    photos,
  });
});

export default router;