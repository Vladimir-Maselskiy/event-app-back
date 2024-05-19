const eventsRouter = require('./events');
const registrationsRouter = require('./registrations');
const cronRouter = require('./cron');

module.exports = {
  cronRouter,
  eventsRouter,
  registrationsRouter,
};
