import { PoolConfig, createPool } from 'mysql';

const DEFAULT_CONNECTION_LIMIT = 10;
const DEFAULT_DATABASE_PORT = 3306;

function parsePositiveInteger(value: string | undefined, fallback: number): number {
    if (!value) {
        return fallback;
    }

    const parsedValue = Number(value);
    return Number.isInteger(parsedValue) && parsedValue > 0 ? parsedValue : fallback;
}

const poolConfig: PoolConfig = {
    connectionLimit: parsePositiveInteger(process.env.DB_CONNECTION_LIMIT, DEFAULT_CONNECTION_LIMIT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parsePositiveInteger(process.env.DB_PORT, DEFAULT_DATABASE_PORT)
};

const pool = createPool(poolConfig);

export default pool;
