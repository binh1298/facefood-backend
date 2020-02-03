module.exports = {
  development: {
    database: 'facefood_database',
    username: 'username',
    password: 'password',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};