const {DATABASE_URL, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT} = require("../../configurations");

module.exports = {
  development: {
    databaseUrl: DATABASE_URL,
    database: POSTGRES_DB,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: 'postgres'
  },

  production: {
    databaseUrl: DATABASE_URL,
    database: POSTGRES_DB,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: 'postgres'
  }
};
