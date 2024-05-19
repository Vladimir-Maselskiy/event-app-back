const { Registration } = require('../../models/registration');

const addRegistration = async (req, res, next) => {
  try {
    const registration = await Registration.create({
      ...req.body,
    });
    res.status(201).json(registration);
  } catch (error) {
    next(error);
  }
};
module.exports = addRegistration;
