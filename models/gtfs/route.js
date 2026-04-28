const mongoose = require('mongoose');

const Route = mongoose.model('Route', new mongoose.Schema({
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
  route_id: {
    type: String,
    required: true,
    index: true
  },
  agency_id: String,
  route_short_name: String,
  route_long_name: String,
  route_desc: String,
  route_type: {
    type: Number,
    required: true,
    min: 0,
    max: 7
  },
  route_url: String,
  route_color: String,
  route_text_color: String,
  route_sort_order: Number,
}));

Route.collection.createIndex({ agency_key: 1, route_id: 1 }, { unique: true });

module.exports = Route;
