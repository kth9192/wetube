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
        avatarUrl: null,
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

export const githubLogin = passport.authenticate('github');

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    // eslint-disable-next-line camelcase
    _json: { id, avatar_url, name, email },
  } = profile;

  console.log('git avatar ', profile);

  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();

      return cb(null, user);
    }

    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate('facebook');

export const facebookLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, name, email },
  } = profile;

  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      user.save();

      return cb(null, user);
    }

    const newUser = await User.create({
      email,
      name,
      facebookId: id,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`,
    });

    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  console.log(req.user);

  try {
    const user = await User.findById(req.user.id).populate('videos');
    res.render('userDetail', { pageTitle: 'User Detail', user });
  } catch (error) {
    console.log(error);

    res.redirect(routes.home);
  }
};

export const users = (req, res) => {
  res.render('users', { pageTitle: 'users' });
};
export const userDetail = async (req, res) => {
  console.log('userDetail', req.user.avatarUrl);

  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate('videos');
    res.render('userDetail', { pageTitle: 'user Detail', user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditProfile = (req, res) => {
  res.render('editProfile', { pageTitle: 'edit Profile' });
};

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file,
  } = req;

  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl,
    });

    res.redirect(routes.me);
  } catch (error) {
    res.redirect(routes.editProfile);
  }
};

export const getChangePassword = (req, res) => {
  res.render('changePassword', { pageTitle: 'change Password' });
};

export const postChangePassword = async (req, res) => {
  const { oldPassword, newPassword, verifyPassword } = req.body;

  try {
    if (newPassword !== verifyPassword) {
      res.status(400);
      res.redirect(`/users${routes.changePassword}`);
    }
    await req.user
      .changePassword(oldPassword, newPassword)
      .then(() => {
        res.redirect(routes.me);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(400);
    res.redirect(`/users${routes.changePassword}`);
  }
};
