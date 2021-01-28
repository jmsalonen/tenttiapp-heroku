const { Pool } = require('pg')

let connectInfo = {}

if (process.env.HEROKU) {
  connectInfo = {
    connectionString: process.env.DATABASE_URL
  }
}
else {
  connectInfo = {
    user: 'postgres',
    host: 'localhost',
    database: 'tenttikanta',
    password: 'salonen',
    port: 5432,
  }
}

const pool = new Pool(connectInfo)

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}