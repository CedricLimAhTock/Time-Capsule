import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/user';

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }); // Find a user with the provided email

    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }

    // Check if the provided password matches the stored password hash
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ 
        message: 'Invalid credentials'
      });
    }

    // If authentication is successful, generate a new JWT for the user
    const token = jwt.sign({
      userID: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h',
    });
    
    // Send the JWT back to the user
    res.json({ token });



  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Server error' 
    });
  }
});

export default router;
