const {
  signUpUser,
} = require('../auth.service');

async function handlerSignUpUser(req, res) {
  const newUser = req.body;

  try {
    // TODO: manejar, validar campos requeridos/obligatorios al crear
    const user = await signUpUser(newUser);
    if (!user) {
      res
        .status(400)
        .json({ message: `${newUser.email} is already registered` });
    } else {
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  handlerSignUpUser,
};