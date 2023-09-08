import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import Event from './models/Event.js';

const app = express ();
app.use(express.json());
// Create new event
app.get('/events', async (req, res) => {
    try {
        if (
            !req.body.title || !req.body.description
        ) {
            return res.status(400).json({ message: 'Please fill out all fields' });
        }

        const newEvent = new Event({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            media: req.body.media,
        });

        const event = await Event.create(newEvent);
        return res.status(201).json(event);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
mongoose
    .connect(mongoDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to database');
        app.listen (PORT, () => {
            console.log ('Server running on port 5555');
        }); 
    })
    .catch((err) => {
        console.log('Error connecting to databse', err.message);
    });
