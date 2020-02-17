import {Router} from 'express';
// if want your local sql, use this
// import {getPostData, createPostData, deletePostData, updataPostData, checkPWPostData} from "../models/postModel.js";
import {getPostData, createPostData, deletePostData, updataPostData, checkPWPostData} from "../models/postLiteModel.js";

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

router.post('/modify', async (req, res) => {
  await updataPostData(req.body.idPost, req.body.title, req.body.contents);
  console.log(req.body);
  res.send('update User');
});

router.post('/delete', async (req, res) => {
  await deletePostData(req.body.idPost);
  console.log('delete');
  res.send('delete');
});

router.post('/check_pw', async (req, res) => {
  let originPW = await checkPWPostData(req.body.idPost);

  if(originPW.dataValues.postPw === req.body.pw) {
    console.log('비밀번호 같음');
    res.send('confirm');
  } else {
    console.log('비밀번호 다름');
    res.send('denied');
  }

});

export default router;