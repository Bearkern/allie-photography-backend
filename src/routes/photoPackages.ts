import { Router, Request, Response } from 'express';
import PhotoPackages from "../model/photoPackagesModels";
import { Types } from "mongoose";

const router = Router();

type AllPhotoPackagesData = {
  _id: Types.ObjectId,
  package: string,
  title: string,
  price: number,
  cover: string,
  content: string[],
}

type PhotoPackagesData = {
  _id: Types.ObjectId,
  package: string,
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

  const allPhotoPackages: AllPhotoPackagesData[] = photoPackages.map((photoPackage: PhotoPackagesData) => ({
    _id: photoPackage._id,
    package: photoPackage.package,
    title: photoPackage.title,
    price: photoPackage.price,
    cover: photoPackage.cover,
    content: photoPackage.content,
  }));

  res.send(allPhotoPackages);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const photoPackage = await PhotoPackages.findById(id);

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
    package: data.package,
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
    package: data.package,
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