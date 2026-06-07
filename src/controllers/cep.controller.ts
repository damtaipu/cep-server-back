import { MysqlError } from 'mysql';
import { RequestHandler } from 'express';
import { BaseData } from '@data/cep-base.class';
import ExecuteSql from '../services/sql-generic.service';

interface CepDto {
    cep: string;
}

type ProcedureResult<T> = [T[], unknown];

export default class CepController {
    public readonly allCep: RequestHandler = (_req, res) => {
        return new BaseData<CepDto[]>(200, 'Todos os CEPs', []).sendResponse(res);
    };

    public readonly onlyOneCep: RequestHandler<{ cep: string }> = (req, res) => {
        const { cep } = req.params;
        return new BaseData<CepDto>(200, 'CEP específico', { cep }).sendResponse(res);
    };

    public readonly callCEP: RequestHandler = async (_req, res) => {
        try {
            const sql = new ExecuteSql<ProcedureResult<unknown>>('CALL showUsers;');
            const [rows] = await sql.execute();

            return new BaseData(200, 'Sucesso', rows).sendResponse(res);
        } catch (error) {
            const message = this.getDatabaseErrorMessage(error);
            return new BaseData(500, message, []).sendResponse(res);
        }
    };

    private getDatabaseErrorMessage(error: unknown): string {
        const mysqlError = error as Partial<MysqlError>;
        return mysqlError.code ?? 'Erro interno ao consultar dados';
    }
}
