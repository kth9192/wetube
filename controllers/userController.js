import passport from 'passport';

import routes from '../routes.js';
import User from '../models/User.js';

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, passwordVerify },
  } = req;

  if (password !== passwordVerify) {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  } else {
    // ToDo: Register User
    // ToDo: Log user in
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'login' });
};

export const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  //  TODO: logout
  res.redirect(routes.home);
};
export const users = (req, res) => {
  res.render('users', { pageTitle: 'users' });
};
export const userDetail = (req, res) => {
  res.render('userDetail', { pageTitle: 'user Detail' });
};
export const editProfile = (req, res) => {
  res.render('editProfile', { pageTitle: 'edit Profile' });
};
export const changePassword = (req, res) => {
  res.render('changePassword', { pageTitle: 'change Password' });
};
