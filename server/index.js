import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import Event from './models/Event.js';
import cors from 'cors';
import eventRoutes from './routes/events.js'

const app = express(); 

app.use(express.json());
app.use(cors());

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


app.use('/events', eventRoutes);


mongoose
    .connect(mongoDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database', err.message);
    });

const serverPort = PORT || 3000;
app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});