const { Pool } = require('pg')

let connectInfo = {}

if (process.env.HEROKU) {
  connectInfo = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
}
else {
  connectInfo = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  }
}

const pool = new Pool(connectInfo)

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}