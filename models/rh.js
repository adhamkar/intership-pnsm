const { Sequelize, DataTypes } = require("sequelize");
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

const RessourceHumaine = sequelize.define(
  "ressourceHumaine",
  {
    ressourceHumaine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    //fix

    fixe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fixe_medecin: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    fixe_infermier: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    fixe_sageFemme: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    fixe_chauffeur: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    
    fixe_appuie: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    fixe_technicien: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    //mobile
    mobile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mobile_medecin: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    mobile_infermier: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    mobile_sageFemme: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    mobile_chauffeur: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    mobile_appuie: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    mobile_technicien: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mobile_emOperationnelle: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    csr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    emOperationnelle: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    //ressourcesHumaineMobilise

    ressourcesHumaineMobilise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ressourcesHumaineMobilise_medecin: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    ressourcesHumaineMobilise_infermier: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    ressourcesHumaineMobilise_sageFemme: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    ressourcesHumaineMobilise_chauffeur: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    ressourcesHumaineMobilise_appuie: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    ressourcesHumaineMobilise_technicien: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    
    trimestre: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    sortie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { RessourceHumaine, sequelize };

RessourceHumaine.sync({
  alter: true,
})
  .then(() => {
    console.log("model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize and model:", error);
  });
