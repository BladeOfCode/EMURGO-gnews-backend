import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {router as routes} from './routes';

const app = express();

// apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// apply routers
app.use(routes);

export default app;