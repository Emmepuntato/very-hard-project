const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

const UdataModel = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    required: [true, 'please enter a password'],
    minlength: [6, 'Minimun 6 characters'],
  },
  companyName: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  own: Array,
})

// -------- NO ARROW FUNC!!! ---------------
UdataModel.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

//--custom methods permanently linked to this class/document/model-----
UdataModel.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  )
}
//---------------------------------------------------------------------
module.exports = mongoose.model('UserData', UdataModel)
