import { createPool } from 'mysql';

const pool = createPool({
    connectionLimit: 1000,
    user: '***',
    password: '**',
    database: '**',
    host: '***',
    port: 3306
});

export default pool;