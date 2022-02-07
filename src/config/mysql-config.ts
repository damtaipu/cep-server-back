import { createPool } from 'mysql';

const pool = createPool({
    connectionLimit: 1000,
    user: 'jdoliveira',
    password: 'Damiao1981',
    database: 'db-dev-instance-1',
    host: 'database-dev.cy6uiwtkhc3t.sa-east-1.rds.amazonaws.com',
    port: 3306
});

export default pool;