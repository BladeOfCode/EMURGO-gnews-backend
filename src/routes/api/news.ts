import express from 'express';
const router = express.Router();
import { getNews, getNewsByAuthor, getNewsByTitle } from '../../controllers/news';

//define routers
router.get('/news', getNews);
router.get('/news/title/:title', getNewsByTitle);
router.get('/news/author/:author', getNewsByAuthor);

export {router}
