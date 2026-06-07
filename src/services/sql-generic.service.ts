import { MysqlError } from 'mysql';
import pool from '../config/mysql-config';

type QueryParam = string | number | boolean | Date | null;
type QueryParams = QueryParam[] | Record<string, QueryParam>;

export default class ExecuteSql<T = unknown> {
    constructor(
        private readonly query: string,
        private readonly params?: QueryParams
    ) {}

    public execute(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            pool.query(this.query, this.params, (error: MysqlError | null, result: T) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(result);
            });
        });
    }
}
