/*
const Sequelize = require("sequelize");
var express = require("express");
const app = express();

app.use(express.json());

app.get('/',(res,rep)=>{
  rep.send("welcom")
})

const sequelize = new Sequelize("test_Db", "adhaam", "1234", {
  dialect: "mssql",
  host: "ADHAM",
  dialectOptions: {
    options: {
      // trustedConnection: true,
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


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully..");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const User = sequelize.define(
  "user",
  {
    // Model attributes are defined here
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique:true,
      
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      
    },
    type:{
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      
    },
    documents: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
      // allowNull defaults to true
    },
    createdAt:{
      type:Sequelize.DataTypes.DATE,
      defaultValue:Sequelize.NOW,
      allowNull: false,
    },
    updatedAt:{
      type:Sequelize.DataTypes.DATE,
      defaultValue:Sequelize.NOW,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);

User.sync({ alter: true })
  .then((data) => {
    console.log("table and model synced succefully");
  })
  .catch((error) => {
    console.log("table and model failed to sync");
  });

app.post("/users", async (req, res) => {
  try {
    const { email, password, type,documents,createdAt,updatedAt } = req.body;
    const newUser = await User.create({ email, password, type,documents,createdAt,updatedAt });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/users/:user_id', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findOne();

    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, type, documents, createdAt, updatedAt } = req.body;

    // Find the user by user_id
    const user = await User.findByPk(id);

    if (!user) {
      // No user with the specified user_id found
      res.status(404).json({ error: 'User not found' });
    } else {
      // Update the user with the new data
      user.email = email || user.email;
      user.password = password || user.password;
      user.type = type || user.type;
      user.documents = documents || user.documents;
      user.createdAt = createdAt || user.createdAt;
      user.updatedAt = updatedAt || user.updatedAt;

      await user.save();

      res.status(200).json(user);
    }
  } catch (error) {
    console.error('Failed to modify user:', error);
    res.status(500).json({ error: 'Failed to modify user' });
  }
});


app.delete('/users/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;

    // Delete the user from the database
    const deletedUser = await User.destroy({ where: { user_id } });

    if (deletedUser === 0) {
      // No user with the specified id found
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(204).send(); // No content
    }
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
 */

const express = require("express");
const cors = require('cors');
//const { sequelize } = require('./association/relationships');
const bodyParser = require('body-parser');

const userRouter = require("./routers/userRouter");
const regionRouter = require("./routers/regionRouter");
const provinceRouter = require("./routers/provinceRouter");
const populationRouter = require("./routers/populationRouter");
const pdrRouter = require("./routers/pdrRouter");
const planActionRouter = require("./routers/planActionRouter");
const ressourceRouter = require("./routers/ressourceRouter");
const ressourceHumaineRouter = require("./routers/ressourceHumaineRouter");
const centralRouter = require("./routers/centralRouter");
const rapportRouter = require("./routers/rapportRouter");
const csrRouter = require("./routers/csrRouter");
const autreActiviteRouter = require("./routers/autreActiviteRouter");
const detectionPrecoceCancerRouter = require("./routers/detectionPrecoceCancerRouter");
const maladiePisteRouter = require("./routers/maladiePisteRouter");
const pdrVisiteRouter = require("./routers/pdrVisiteRouter");
const santeScolaireRouter = require("./routers/santeScolaireRouter");
const santeMaternelleRouter = require("./routers/santeMaternelleRouter");
const santeInfantilRouter = require("./routers/santeInfantilRouter");
const programmeRouter = require("./routers/programmeRouter");
const populationCibleRouter = require("./routers/populationCibleRouter");
const planificationFamilialeRouter = require("./routers/planificationFamilialeRouter");
const sortieRouter = require("./routers/sortieRouter");
//router of auth_jwt
const authRoutes = require('./routers/auth');
//middleware
//const authenticateToken = require('./middleware/auth');
const protectedRouter = require('./routers/protectedRouter');
const app = express();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/users", userRouter);
app.use("/regions", regionRouter);
app.use("/provinces", provinceRouter);
app.use("/populations", populationRouter);
app.use("/pdrs", pdrRouter);
app.use("/planActions", planActionRouter);
app.use("/ressources", ressourceRouter);
app.use("/ressourceHumaines", ressourceHumaineRouter);
app.use("/centrals", centralRouter);
app.use("/rapports", rapportRouter);
app.use("/csrs", csrRouter);
app.use("/autreActivites", autreActiviteRouter);
app.use("/detectionPrecoceCancers", detectionPrecoceCancerRouter);
app.use("/maladiePistes", maladiePisteRouter);
app.use("/pdrVisites", pdrVisiteRouter);
app.use("/santeScolaires", santeScolaireRouter);
app.use("/santeMaternelles", santeMaternelleRouter);
app.use("/santeInfantils", santeInfantilRouter);
app.use("/programmes", programmeRouter);
app.use("/populationCibles", populationCibleRouter);
app.use("/planificationFamiliales", planificationFamilialeRouter);
app.use("/sorties", sortieRouter);

app.use('/auth', authRoutes);
app.use('/api', protectedRouter);

// Start the server
/* 
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
*/
// Sync the Sequelize instance to create the associations

//sequelize.sync();

module.exports = app;
