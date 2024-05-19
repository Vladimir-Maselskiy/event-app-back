const { Registration } = require('../../models/registration');

const getEventRegistrations = async (req, res, next) => {
  const eventId = req.params.eventId;
  console.log('eventId', eventId);
  try {
    const registrations = await Registration.find({ eventId });
    res.json(registrations);
  } catch (error) {
    next(error);
  }
};

module.exports = getEventRegistrations;
