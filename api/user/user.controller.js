const {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.service');

function handlerAllUser(req, res) {
  const users = getAllUser();
  res.json(users);
}

module.exports = {
  handlerAllUser
};