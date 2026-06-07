import { RequestHandler } from 'express';
import { BaseData } from '@data/cep-base.class';

export default class BaseController {
    public readonly index: RequestHandler = (_req, res) => {
        return new BaseData(401, 'URL base não autorizada', []).sendResponse(res);
    };
}
