const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("test_Db", "adhaam", "1234", {
  dialect: "mssql",
  host: "ADHAM",
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
const Csr=require('./csr');
const Sortie=require('./sortie');

Csr.hasMany(Sortie, { foreignKey: 'csr_id', as: 'sorties' });
Sortie.belongsTo(Csr, { foreignKey: 'csr_id', as: 'csr' });

module.exports = {
  Csr,
  Sortie,
  sequelize
};