import {Request, Response} from 'express';

export default class BaseController {
    public index(req: Request, res: Response, next: any){
        return res.status(401).send('URL base não autorizada');
    }
}