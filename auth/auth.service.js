const UserModel = require("../api/user/user.model");

async function registerUser(user) {
  const { email } = user;
  const existEmail = await UserModel.findOne({ email });

  if (existEmail) {
    return null;
  }
  const newUser = await UserModel.create(user);
  return newUser;
}

module.exports = {
  registerUser
}
