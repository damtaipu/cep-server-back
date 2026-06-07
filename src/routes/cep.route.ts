import { Router } from 'express';
import CepController from '@controllers/cep.controller';
import checkToken from '../middleware/check-token-mid';

const cepRoute = Router();
const cepController = new CepController();

cepRoute.get('/cep', cepController.allCep);
cepRoute.get('/cep/:cep', checkToken, cepController.onlyOneCep);
cepRoute.post('/cep/call', cepController.callCEP);

export default cepRoute;
