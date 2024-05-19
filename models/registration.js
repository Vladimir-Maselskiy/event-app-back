const { Schema, model } = require('mongoose');

const registrationsSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    source: {
      type: String,
      required: [true, 'Source is required'],
    },
    birthday: {
      type: String,
      required: [true, 'Birthday is required'],
    },
    eventId: {
      type: Number,
      required: [true, 'EventId is required'],
    },
    registrationDate: {
      type: String,
      required: [true, 'Registration Date is required'],
    },
  },
  { versionKey: false, timestamps: false }
);

const Registration = model('registrations', registrationsSchema);

module.exports = { Registration };
