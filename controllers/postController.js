import { Router } from 'express';

let router = Router();

router.use((req, res, next) => {
  next();
});

router.post('/post', (req, res) => {
  let userData;
  let postData;

  res.send();
});

export default router;