import passport from 'passport';
import GithubStrategy from 'passport-github';
import FacebookStrategy from 'passport-facebook';

import routes from './routes.js';
import User from './models/User.js';
import {
  githubLoginCallback,
  facebookLoginCallback,
} from './controllers/userController.js';

passport.use(User.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: `${process.env.BASEURL}${routes.githubCallback}`,
    },
    githubLoginCallback,
  ),
);
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `https://bea7b3cc.ngrok.io${routes.facebookCallback}`,
      profileFields: ['id', 'displayName', 'photos', 'email'],
      scope: ['public_profile', 'email'],
    },
    facebookLoginCallback,
  ),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
