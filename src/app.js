import '@babel/polyfill';

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import path from 'path';
import flash from 'express-flash';

import globalRouter from './routers/globalRouter.js';
import userRouter from './routers/userRouter.js';
import videoRouter from './routers/videoRouter.js';
import apiRouter from './routers/apiRouter.js';
import routes from './routes.js';
import { localMiddleware } from './middlwares.js';
import './passport.js';

const environment = process.env.NODE_ENV || 'development';

// eslint-disable-next-line no-underscore-dangle
const __dirname =
  environment === 'development'
    ? `${process.cwd()}/src`
    : `${process.cwd()}/build`;
// const __dirname = new URL('.', import.meta.url).pathname.substring(1);

console.log(__dirname);

const app = express();
const CookieStore = MongoStore(session);

app.use(helmet());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
