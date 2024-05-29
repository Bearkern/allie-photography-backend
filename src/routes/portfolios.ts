import { Router, Request, Response } from 'express';
import fs from 'fs'

const router = Router();
type AllPortfolios = {
  id: string,
  title: string,
};

type Photos = {
  url: string,
  title: string,
  description: string,
}

type Portfolios = {
  id: string,
  title: string,
  description: string,
  coverUrl: string,
  isEnabled: boolean,
  photos: Photos[],
}

router.get('/', (_, res: Response) => {
  const data: AllPortfolios[] = JSON.parse(fs.readFileSync('./doc/fakeData/portfolios-all.json', 'utf-8'));
  res.send(data);
});

router.get('/:pid', (req: Request, res: Response) => {
  const pid = req.params.pid;
  const data: Portfolios = JSON.parse(fs.readFileSync('./doc/fakeData/portfolios-1.json', 'utf-8'));
  console.log('data:', data);
  res.send(data);
});

router.post('/', (req: Request, res: Response) => {
  const data = req.body;
  console.log('data.title:', data.title);
  res.send(data)
});

export default router;