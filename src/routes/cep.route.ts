import { Router } from 'express';
import CepController from '@controllers/cep.controller';
import checkToken from '../middleware/check-token-mid'

const cepRoute = Router();

cepRoute.get('/cep', new CepController().allCep);

cepRoute.get('/cep/:cep', checkToken, new CepController().onlyOneCep);

cepRoute.post('/cep/call', new CepController().callCEP);

export default cepRoute;