import { Router, Request, Response} from "express";
import {router as newsRoutes} from './api/news';
import { keys } from "../config/keys";

const router = Router();

//define the base url of application
const {apiURL} = keys.app;
const api = `/${apiURL}`;

//define the routes for fetching news.
router.use(api, newsRoutes);

//define the default 404 routes.
router.use(api, (req: Request, res: Response) => {
    res.status(404).json("No API route found.");
})

export {router};


