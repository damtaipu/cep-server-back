import { Router } from 'express';
import BaseController from '@controllers/base.controller';

const baseRoute = Router();

baseRoute.get('/', new BaseController().index);

export default baseRoute;