const {
  signUpUser,
  signInUser,
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

async function handlerSignInUser(req, res) {
  const posibleUser = req.body;

  try {
    const user = await signInUser(posibleUser);
    if (!user) {
      return res
        .status(404)
        .json({ message: `invalid email or password` });
    }
    // no se debe devolver el password
    const { password, ...userWithoutPassword } = user.toObject();
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  handlerSignUpUser,
  handlerSignInUser,
};