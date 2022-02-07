import pool from '../config/mysql-config';

const mysql = pool;

export default class ExecuteSql {
    private query: string;
    private params?: [];

    constructor(qry: string, par?: []) {
        this.query = qry;
        this.params = par;
    }

    public execute = () => {
        return new Promise((resolve, reject) => {
            mysql.query(this.query, this.params, (error, result, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    };
}