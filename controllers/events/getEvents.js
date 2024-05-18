const { Event } = require('../../models/event');

const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find({});
    res.json(events);
    console.log('events', events);
  } catch (error) {
    next(error);
  }
};

module.exports = getEvents;
