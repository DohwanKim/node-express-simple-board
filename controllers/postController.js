import { Router } from 'express';

let router = Router();

router.use((req, res, next) => {
  next();
});

router.get('', (req, res) => {
  res.render('index.html');

  console.log('work');
});

export default router;