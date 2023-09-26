const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_pj0f', // Database name
  'clouduser', // User
  'lhaqrIqinRjL6o69bw5YCH2g7PIRi0UF', // Password
  {
    host: 'dpg-ck9d0eugtj9c73c4g25g-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
