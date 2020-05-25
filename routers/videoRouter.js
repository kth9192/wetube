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
import { uploadMiddleware, onlyPrivate } from '../middlwares.js';

const videoRotuer = express.Router();

//  Upload
videoRotuer.get(routes.upload, onlyPrivate, getUpload);
videoRotuer.post(routes.upload, onlyPrivate, uploadMiddleware, postUpload);

//  video detail
videoRotuer.get(routes.videoDetail(), videoDetail);

//  edit video
videoRotuer.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRotuer.post(routes.editVideo(), onlyPrivate, postEditVideo);

//  delete
videoRotuer.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRotuer;
