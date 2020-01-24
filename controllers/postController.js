import {Router} from 'express';
import {getPostData, createPostData, deletePostData, updataPostData} from "../models/postModel.js";

let router = Router();

router.use((req, res, next) => {
  next();
});

router.get('/get', async (req, res) => {
  let postData = await getPostData();
  console.log('리턴된 데이터 :', postData);
  res.send(postData);
});

router.post('/create', async (req, res) => {
  console.log(req);

  // await createPostData();
  res.send('create Post');
});

router.post('/update', async (req, res) => {
  await updataPostData();
  console.log('update');
  res.send('update User');
});

router.get('/delete', async (req, res) => {
  await deletePostData();
  console.log('delete');
  res.send('delete');
});

export default router;