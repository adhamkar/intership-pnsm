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

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, 
      },
      
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isIn:[['csr','region','province','central']],
      },
    },
    documents: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = { User, sequelize };

User.sync({
  alter: true,
})
  .then(() => {
    console.log("Table and model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize table and model:", error);
  });

/*

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      documents: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
        allowNull: true,
      },
    },
    {
      // Other model options go here
      freezeTableName: true,
      timestamps: false,
    }
  );
  User.findAllUsers = async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error("Error retrieving users from the database");
    }
  };

  return User;
  module.exports = { User };
};
 */
