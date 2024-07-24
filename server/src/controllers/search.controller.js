const User = require("../models/search.model");
const createUser = async () => {
  try {
    const newUser = await new User(req.body);
    await res.status(201).json(newUser);
    newUser.save();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
};
