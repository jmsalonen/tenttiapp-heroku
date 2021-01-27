const { Pool } = require('pg')

let connectInfo = {}

if (process.env.HEROKU) {
  connectInfo = {
    user: 'wwjrvuiyhnfirr',
    host: 'ec2-54-155-99-116.eu-west-1.compute.amazonaws.com',
    database: 'd7thh2mtrnv9vg',
    password: 'd865592077ec874f758eaac9bfcce9bd61164e2341d2bf0f6fb185afa1cb7e11',
    port: 5432,
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