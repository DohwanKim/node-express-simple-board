import express from 'express';
import ejs from 'ejs';
import cors from 'cors';
import morgan from 'morgan';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import postController from './controllers/postController.js';
import pageController from './controllers/pageController.js';

// const PORT = 4000;
const PORT = 80; //HEROKU

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/', pageController);
app.use('/post', postController);

app.listen(process.env.PORT || PORT, () => console.log(chalk.blueBright.bgBlack(`Example app listening on port ${PORT}!`)));