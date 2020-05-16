import express from "express";
import routes from "../routes.js";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController.js";

const videoRotuer = express.Router();

videoRotuer.get(routes.videos, videos);
videoRotuer.get(routes.uploadVideo, upload);
videoRotuer.get(routes.videoDetail, videoDetail);
videoRotuer.get(routes.editVideo, editVideo);
videoRotuer.get(routes.deleteVideo, deleteVideo);

export default videoRotuer;
