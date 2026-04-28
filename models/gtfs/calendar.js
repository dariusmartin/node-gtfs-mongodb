const mongoose = require('mongoose');

const Calendar = mongoose.model('Calendar', new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  agency_key: {
    type: String,
    required: true,
    index: true
  },
  service_id: {
    type: String,
    required: true
  },
  monday: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  tuesday: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  wednesday: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  thursday: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  friday: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  saturday: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  sunday: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  start_date: {
    type: Number,
    required: true,
    min: 10000000
  },
  end_date: {
    type: Number,
    required: true,
    min: 10000000
  }
}));

Calendar.collection.createIndex({ agency_key: 1, start_date: 1, end_date: 1 });
Calendar.collection.createIndex({ agency_key: 1, monday: 1, start_date: 1, end_date: 1 });
Calendar.collection.createIndex({ agency_key: 1, tuesday: 1, start_date: 1, end_date: 1 });
Calendar.collection.createIndex({ agency_key: 1, wednesday: 1, start_date: 1, end_date: 1 });
Calendar.collection.createIndex({ agency_key: 1, thursday: 1, start_date: 1, end_date: 1 });
Calendar.collection.createIndex({ agency_key: 1, friday: 1, start_date: 1, end_date: 1 });
Calendar.collection.createIndex({ agency_key: 1, saturday: 1, start_date: 1, end_date: 1 });
Calendar.collection.createIndex({ agency_key: 1, sunday: 1, start_date: 1, end_date: 1 });

module.exports = Calendar;
