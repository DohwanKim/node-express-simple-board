import express from 'express';
import ejs from 'ejs';
import cors from 'cors';
import morgan from 'morgan';
import chalk from 'chalk';
import postController from './controllers/postController.js';

const PORT = 4001; //static 고정들은 대문자 써주기

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));

app.use('/', postController);

app.listen(PORT, () => console.log(chalk.black.bgBlue `Example app listening on port ${PORT}!`));