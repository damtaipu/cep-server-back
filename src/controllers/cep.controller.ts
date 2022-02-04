import {Request, Response} from 'express';
import { BaseData } from '@data/cep-base.class'

export default class CepController {
    // Retorna todos os CEPs
    public allCep(req: Request, res: Response, next: any){
        let baseData: BaseData = new BaseData(200, 'Todos os CEPs', []);
        return res.status(200).send(baseData);
    }

    // Retorna CEP epecífico
    public onlyOneCep(req: Request, res: Response, next: any){
        let baseData: BaseData = new BaseData(200, `CEP: ${req.params.cep}`, [{no: 5}, {no: 5}]);
        return res.status(200).send(baseData);
    }
}