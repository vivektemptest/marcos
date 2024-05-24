const userService = require("../services/userService");
const bcrypt = require('bcryptjs');

exports.getUser = async (req, res) => {
  try {
    const user = await userService.findUserById(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userService.createUser({
      name,
      email,
      password: hashedPassword,
    });
    if (!user) {
      return res
        .status(500)
        .json({ success: false, message: "internal server error" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
};
