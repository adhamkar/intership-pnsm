const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const { generateToken } = require('../utils/jwt');
const { Population } = require('../models/population');
const { check, validationResult } = require('express-validator');

router.post('/login', async (req, res) => {
  
  const { email, password } = req.body;

  try {
    // Find the user by email in the database
    const user = await User.findOne({ where: { email } });

    console.log("User found:", user);
    
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Invalid password for email:", email);
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate a JWT token for the user
    const token = generateToken(user);

    // Respond with the token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});
router.patch('/pssw',[check('newPassword').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],async(req,res)=>{
  
try{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userEmail  = req.body.email;
    const newPassword = req.body.newPassword;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    const [updatedRowsCount, updatedRows] = await User.update(
      { password: hashedPassword },
      { where: { email: userEmail  } }
    );

    if (updatedRowsCount === 0) {
      // If no rows were updated, the user with the specified ID was not found
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'Password updated successfully' });

}catch(error){
  console.error('Password update failed:', error);
  res.status(500).json({ message: 'Server error' });
}
})

router.post('/signup', async (req, res) => {
  const { email, password, type } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the data from the request body
    const newUser = await User.create({ email, password: hashedPassword, type });

    // Generate a JWT token for the new user
    const token = generateToken(newUser);

    // Respond with the token
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Signup failed' });
  }
});

router.post('/populations',  async (req, res) =>{
  try{
    const { 
      population_rurale,
      population_cible_equipe_mobile,
      population_habitant_moins_de_3km,
      listeLocPopulation_habitant_entre_3km_et_6kmalites,
      population_habitant_entre_6km_10km,
      population_habitant_plus_10km,
      distance_moyenne_entre_cs_route_goudronnee_plus_proche,
      naissances_attendues,
      enfants_moins_1ans,
      enfants_moins_5ans,
      nombre_FAR,
      nombre_FMAR,
      femmes_enceintes,
    } = req.body;
    const newPopulation = await Population.create({ 
      population_rurale,
      population_cible_equipe_mobile,
      population_habitant_moins_de_3km,
      listeLocPopulation_habitant_entre_3km_et_6kmalites,
      population_habitant_entre_6km_10km,
      population_habitant_plus_10km,
      distance_moyenne_entre_cs_route_goudronnee_plus_proche,
      naissances_attendues,
      enfants_moins_1ans,
      enfants_moins_5ans,
      nombre_FAR,
      nombre_FMAR,
      femmes_enceintes,
     });
     res.status(201).json({ newPopulation });
  }catch(error){
    console.error(error);
    res.status(500).json({ error: 'saving data failed' })
  }
  
})
module.exports = router;
/*
router.post('/signup', authController.signup);
router.post('/login', authController.login);
*/



