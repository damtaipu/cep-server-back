import {Request, Response} from 'express';
import { BaseData } from '@data/cep-base.class'
import ExecuteSql from '../services/sql-generic.service'

export default class CepController {
    // Retorna todos os CEPs
    public allCep(req: Request, res: Response, next: any){
        let baseData: BaseData = new BaseData(200, 'Todos os CEPs', []);
        return baseData.sendResponse(res);
    }

    // Retorna CEP epecífico
    public onlyOneCep(req: Request, res: Response, next: any){
        let baseData: BaseData = new BaseData(200, 'CEP específico', [{cep: 59555000}]);
        return baseData.sendResponse(res);
    }

    // Chama procedure no Mysql
    public async callCEP(req: Request, res: Response, next: any){
        try {
            let sql = new ExecuteSql('CALL showUsers;');
            const rst:any = await sql.execute(); 
            let rtnData: BaseData = new BaseData(200, 'Sucesso', rst[0]);
            return rtnData.sendResponse(res);
        } catch (error) {
            let bsDtError: BaseData = new BaseData(500, error.code, []);
            return bsDtError.sendResponse(res);
        }        
    }
}