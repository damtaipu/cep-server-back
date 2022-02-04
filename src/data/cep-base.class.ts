import rtnData from '@data/cep.base-data';

export class BaseData {
    code: number;
    message: string;
    data: {};

    constructor(code: number, message: string, data: {}) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    getBaseData(){
        const data: rtnData = {
            code: this.code,
            message: this.message,
            data: this.data
        }
        return data;
    }
}