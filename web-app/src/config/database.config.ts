import { ConnectionOptions, createConnection } from 'mysql2/promise'

export const databaseConfig: ConnectionOptions = {
  host: 'db_container',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'demo',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
}

export const withConnection = async () => {
  return await createConnection(databaseConfig)
}
