import { Pool } from "pg";

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_hamburgueriaCK',
    password: 'bidu1981',
    port: '5432'
})