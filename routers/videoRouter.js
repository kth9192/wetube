import express from "express";
import routes from "../routes.js";
import {
  videoDetail,
  editVideo,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController.js";

const videoRotuer = express.Router();

videoRotuer.get(routes.upload, getUpload);
videoRotuer.post(routes.upload, postUpload);

videoRotuer.get(routes.videoDetail(), videoDetail);
videoRotuer.get(routes.editVideo, editVideo);
videoRotuer.get(routes.deleteVideo, deleteVideo);

export default videoRotuer;
