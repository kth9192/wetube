import express from 'express';
import routes from '../routes.js';
import {
  videoDetail,
  deleteVideo,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
} from '../controllers/videoController.js';
import { uploadMiddleware } from '../middlwares.js';

const videoRotuer = express.Router();

//  Upload
videoRotuer.get(routes.upload, getUpload);
videoRotuer.post(routes.upload, uploadMiddleware, postUpload);

//  video detail
videoRotuer.get(routes.videoDetail(), videoDetail);

//  edit video
videoRotuer.get(routes.editVideo(), getEditVideo);
videoRotuer.post(routes.editVideo(), postEditVideo);

//  delete
videoRotuer.get(routes.deleteVideo(), deleteVideo);

export default videoRotuer;
