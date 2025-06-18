const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  contactPerson: {
    name: String,
    role: String,
    email: String,
    phone: String,
  },
  capacity: {
    type: Number,
  },
  technicalSpecs: {
    stage: {
      width: Number,
      depth: Number,
      height: Number,
      notes: String,
    },
    sound: {
      system: String,
      mixer: String,
      monitors: String,
      notes: String,
    },
    lighting: {
      system: String,
      notes: String,
    },
    power: {
      type: String,
      notes: String,
    },
  },
  loadIn: {
    entrance: String,
    parking: String,
    notes: String,
  },
  amenities: [String],
  parkingInformation: String,
  notes: String,
  history: [{
    date: Date,
    event: String,
    notes: String,
  }],
  files: [{
    name: String,
    type: String,
    url: String,
    uploadedAt: Date,
  }],
}, {
  timestamps: true,
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
