import { Router, Request, Response } from 'express';
import PhotoPackages from "../model/photoPackagesModels";
import { ObjectId } from "mongoose";

const router = Router();

type AllPhotoPackagesData = {
  _id: ObjectId,
  title: string,
  price: number,
  cover: string,
  content: string[],
}

type PhotoPackagesData = {
  _id: ObjectId,
  title: string,
  price: number,
  cover: string,
  content: string[],
  detail: string[],
  notice: string,
  photos: string[],
}

router.get('/', async (_, res: Response) => {
  const photoPackages = await PhotoPackages.find();

  res.send(photoPackages);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const photoPackage = await PhotoPackages.find({
    _id: id,
  });

  res.send(photoPackage);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const photoPackage = await PhotoPackages.find({
    _id: id
  });

  res.send(photoPackage);
});

router.post('/', async (req: Request, res: Response) => {
  const data = req.body;

  const photoPackage = await PhotoPackages.create({
    title: data.title,
    price: data.price,
    cover: data.cover,
    content: data.content,
    detail: data.detail,
    notice: data.notice,
    photos: data.photos,
  });

  res.send(photoPackage);
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const photoPackage = await PhotoPackages.findByIdAndUpdate({
    _id: id,
  }, {
    title: data.title,
    price: data.price,
    cover: data.cover,
    content: data.content,
    detail: data.detail,
    notice: data.notice,
    photos: data.photos,
  }, {
    new: true,
  });

  res.send(photoPackage);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const photoPackage = await PhotoPackages.findByIdAndDelete({
    _id: id,
  });

  res.send(photoPackage);
});

export default router;