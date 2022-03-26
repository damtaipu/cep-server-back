import express from 'express';

function checkToken(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(req.params.cep);
        next();
}

export default checkToken;
