// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///95-server'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
