import express from 'express';
import * as controller from './controller';

const router = express.Router();

router.post('/login/authentication', controller.authentication);

router.post('/login/user', controller.getUserInfo);

export default router;
