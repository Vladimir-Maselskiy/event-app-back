const cron = async (req, res, next) => {
  try {
    res.json({ cron: 'OK' });
  } catch (error) {
    next(error);
  }
};

module.exports = cron;
