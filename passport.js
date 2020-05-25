import passport from 'passport';
import GithubStrategy from 'passport-github';

import routes from './routes.js';
import User from './models/User.js';
import { githubLoginCallback } from './controllers/userController.js';

passport.use(User.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback,
  ),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
