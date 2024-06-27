import { Router, Response } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (_, res: Response) => {
  res.send('Allie Photography');
});

export default router;