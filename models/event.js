const { Schema, model } = require('mongoose');

const eventsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    eventDate: {
      type: String,
      required: [true, 'Event Date is required'],
    },
    organizer: {
      type: String,
      required: [true, 'Organizer is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

const Event = model('events', eventsSchema);

module.exports = { Event };
