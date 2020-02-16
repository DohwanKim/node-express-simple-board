import {Router} from 'express';
import {getPostData, createPostData, deletePostData, updataPostData} from "../models/postModel.js";

let router = Router();

router.use((req, res, next) => {
  next();
});

router.get('/get', async (req, res) => {
  let postData = await getPostData();
  res.send(postData);
});

router.post('/create', async (req, res) => {
  await createPostData(req.body);
  res.send('created');
});

router.post('/update', async (req, res) => {
  await updataPostData();
  console.log('update');
  res.send('update User');
});

router.post('/delete', async (req, res) => {
  await deletePostData(req.body.idPost);
  console.log('delete');
  res.send('delete');
});

router.post('/check-pw', async (req, res) => {
  await deletePostData(req.body.idPost);
  console.log('check');
  res.send('check data');
});

export default router;