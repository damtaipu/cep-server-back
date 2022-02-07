import { Request, Response} from 'express';
import { BaseData } from '@data/cep-base.class'

export default class NoRouteController {
    // Trata rota não criada
    public noRoute(req: Request, res: Response, next: any){
        let baseData: BaseData = new BaseData(404, 'Rota não encontrada!', []);
        return baseData.sendResponse(res)
    }
}