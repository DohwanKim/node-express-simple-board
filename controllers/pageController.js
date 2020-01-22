import { Router } from 'express';

let router = Router();


router.use((req, res, next) => {
  next();
});

router.get('', (req, res) => {
  res.render('index.html');
});

export default router;