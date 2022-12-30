const mongoose = require('mongoose')

const vegetablesSchema = new mongoose.Schema(
  {
    vId: String,
    vName: String,
    vPrice: Number,
    vUnit: String,
    cid: Number,
    companyName: String,
    createdBy: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    capped: { size: 1024000, max: 1000, autoIndexId: true },
  }
)

module.exports = mongoose.model('Vegetables', vegetablesSchema)
