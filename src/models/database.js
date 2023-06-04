import pkg from "pg"
const { Pool } = pkg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_hamburgueriaCk',
    password: 'bidu1981',
    port: '5432'
})

export default pool