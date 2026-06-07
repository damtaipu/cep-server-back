import { Router } from 'express';
import BaseController from '@controllers/base.controller';

const baseRoute = Router();
const baseController = new BaseController();

baseRoute.get('/', baseController.index);

export default baseRoute;
