import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',         // Database host
    user: 'your_username',     // Database username
    password: 'your_password', // Database password
    database: 'your_database', // Database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const execute = async (query, params) => {
    const [results] = await pool.execute(query, params);
    return results;
};

export default {
    pool,
    execute
};
