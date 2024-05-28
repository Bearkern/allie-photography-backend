import { Router, Request, Response } from 'express';
import allPortfolios from '../../doc/fakeData/portfolios-all.json';
import portfolios from '../../doc/fakeData/portfolios-1.json';

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

router.get('/', (req: Request, res: Response) => {
  const data: AllPortfolios[] = allPortfolios;
  res.send(data);
});

router.get('/:pid', (req: Request, res: Response) => {
  const pid = req.params.pid;
  // const data: Portfolios = portfolios;
  console.log('pid:', pid);
  res.send(pid);
});

router.post('/', (req: Request, res: Response) => {
  const data = req.body;
  res.send(data)
});

export default router;