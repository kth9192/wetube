import express from 'express';
import routes from '../routes.js';
import { postRegisterView } from '../controllers/videoController.js';

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);

export default apiRouter;
