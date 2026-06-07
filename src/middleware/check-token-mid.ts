import { NextFunction, Request, Response } from 'express';
import { BaseData } from '@data/cep-base.class';

const CEP_PATTERN = /^\d{8}$/;

function checkToken(req: Request, res: Response, next: NextFunction): Response | void {
    const { cep } = req.params;

    if (!CEP_PATTERN.test(cep)) {
        return new BaseData(400, 'CEP inválido. Informe exatamente 8 números.', []).sendResponse(res);
    }

    return next();
}

export default checkToken;
