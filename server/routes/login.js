import express from 'express';
import bcrypt from 'bcrypt';
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

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Server error' 
    });
  }
});

export default router;
