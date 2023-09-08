import express from 'express';
import Event from '../models/Event.js'

const router = express.Router();
router.use(express.json());

// Create new event
router.post('/eventssss', async (req, res) => {
    try {
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

// Get all events
router.get('/eventssss', async (req, res) => {
    try {
        const userID = req.params.userID;
        const event = await Event.find({ userID });

        if (event.length === 0) {
            return res.status(200).json({ message: 'No events found in the database' });
        }
        return res.status(201).json(event);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Edit an event
router.put('/events/:id', async (req,res) => {

    try {
        const { id } = req.params;
        const result = await Event.findByIdAndUpdate(id, req.params)
    
        if(!result) {
            return res.status(404).json({ message: 'No events found in database' });
        }
    
        return res.status(200).json({ message: 'Event updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message : error.message });
    }
})


// Delete an event
router.delete('/events/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const result = await Event.indByIdAndDelete(id)

        if (!result) {
            return res.status(404).json({ message: 'No events found in database' });
        }

        return res.status(204).json({ message: 'Event deleted successfully' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message : error.message });
    }
})