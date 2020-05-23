import multer from "multer";

import routes from "./routes.js";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadMiddleware = multerVideo.single("videoFile");
