import { Request, Response } from 'express';
import axios from 'axios';
import NodeCache from 'node-cache';
import { keys } from '../config/keys';

//set the base url and api key of gnews api.
const BASE_URL = keys.gnews.baseURL;
const API_KEY = keys.gnews.apiKey;

//set the node cache for caching.
const cache = new NodeCache({stdTTL: 300, checkperiod: 600});

//fetch all (N) news from the source
const getNews = async(req: Request, res: Response) => {
  const query = req?.query?.q || "world";
  const cacheKey = `news-${query}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        token: API_KEY,
      },
    });

    const data = response.data?.articles;
    cache.set(cacheKey, data);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

//fetch news by a specific title
const getNewsByTitle = async(req: Request, res: Response) => {
  const title = req?.params?.title?.toLowerCase();
  const cacheKey = `news-title-${title}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: title,
        token: API_KEY,
      },
    });

    const data = response.data?.articles?.filter(
      (article: any) => article?.title?.toLowerCase() === title
    );
    cache.set(cacheKey, data);

    return res.json(data);
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal Server Error" + error.message});
  }
}

//fetch news by a specific user
const getNewsByAuthor = async(req: Request, res: Response) => {
  const author = req?.params?.author?.toLowerCase();
  const cacheKey = `news-author-${author}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: author,
        token: API_KEY,
      },
    });

    const data = response.data?.articles?.filter(
      (article: any) => article?.author && article?.author.toLowerCase() === author
    );
    cache.set(cacheKey, data);

    return res.json(data);
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal Server Error" + error.message});
  }
}

export {
  getNews,
  getNewsByAuthor,
  getNewsByTitle
}