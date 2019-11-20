var Sequelize = require('sequelize');

module.exports = new Sequelize('booziebooksDB_db', "root", "TESTPASSWORD", {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
},


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});