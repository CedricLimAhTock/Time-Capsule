const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the user schema
const eventSchema = new Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now,
    },
    media: [String], 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the user who created the event
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
  });

// Create the Event model
const Event = mongoose.model('', eventSchema);

module.exports = Event;
