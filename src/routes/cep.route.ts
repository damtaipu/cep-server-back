import { Router } from 'express';
import CepController from '@controllers/cep.controller';

const cepRoute = Router();

cepRoute.get('/cep', new CepController().allCep);

cepRoute.get('/cep/:cep', new CepController().onlyOneCep);

export default cepRoute;