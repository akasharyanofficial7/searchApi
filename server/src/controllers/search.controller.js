const User = require("../models/search.model");
const createUser = async (req, res) => {
  try {
    const newUser = await new User(req.body);
    await newUser.save();
    await res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchUser = async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const filter = {
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
        { course: { $regex: query, $options: "i" } },
      ],
    };

    const filterData = await User.find(filter);
    res.status(200).json(filterData);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  searchUser,
};
