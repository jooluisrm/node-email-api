import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as EmailController from "../controllers/emailControllers";

const router = Router();

router.get("/ping", ApiController.ping);

router.post('/contato', EmailController.contato);

export default router;