import express from 'express';
import bcrypt from 'bcrypt';
import User from './models/user';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPw = await bcrypt.hash(password, 10);  // Hash the password

        const newUser = User({
            username,
            password: hashedPw  // Store the hashed password in password field
        });

        const savedUser = await newUser.save();  // Save the user to the database

        if (!savedUser) {
            return res.status(400).json({
                message: 'Error signing up'
            });
        }

        res.status(200).json({
            message: 'Successfully signed up'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
});

export default router;
