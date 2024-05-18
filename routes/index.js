const productsRouter = require('./products');
const eventsRouter = require('./events');
const ordersRouter = require('./orders');
const cronRouter = require('./cron');

module.exports = { cronRouter, eventsRouter, productsRouter, ordersRouter };
