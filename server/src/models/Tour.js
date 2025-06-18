const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['planning', 'confirmed', 'active', 'completed', 'cancelled'],
    default: 'planning',
  },
  budget: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  team: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
});

// Virtual for retrieving events associated with this tour
tourSchema.virtual('events', {
  ref: 'Event',
  localField: '_id',
  foreignField: 'tourId',
});

// Virtual for retrieving accommodations associated with this tour
tourSchema.virtual('accommodations', {
  ref: 'Accommodation',
  localField: '_id',
  foreignField: 'tourId',
});

// Virtual for retrieving transportation associated with this tour
tourSchema.virtual('transportation', {
  ref: 'Transportation',
  localField: '_id',
  foreignField: 'tourId',
});

// Set virtuals to be included in JSON output
tourSchema.set('toJSON', { virtuals: true });
tourSchema.set('toObject', { virtuals: true });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
