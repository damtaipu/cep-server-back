import {Response} from 'express';
import rtnData from './cep.base-data';

export class BaseData {
    code: number;
    message: string;
    data: rtnData;
    
    constructor(code: number, message: string, data: {}) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public sendResponse(res: Response){
        let dta: rtnData = {
            code: this.code,
            message: this.message,
            data: this.data
        };

        return res.status(this.code).send(dta);
    }

}