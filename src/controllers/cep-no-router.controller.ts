import { RequestHandler } from 'express';
import { BaseData } from '@data/cep-base.class';

export default class NoRouteController {
    public readonly noRoute: RequestHandler = (_req, res) => {
        return new BaseData(404, 'Rota não encontrada!', []).sendResponse(res);
    };
}
