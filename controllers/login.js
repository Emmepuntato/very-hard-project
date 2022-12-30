const UserData = require('../server/models/udataModel')

//----define functions-------
const addNewUser = async (udata, res) => {
  try {
    const newItem = new UserData(udata)
    newItem.save((err) => {
      console.error(err)
    })
    const token = newItem.createJWT()
    console.log(token)
    return token
  } catch (error) {
    console.error(error)
  }
}
//---------------------------

//------export functions-----
module.exports = addNewUser
//----------------------------
