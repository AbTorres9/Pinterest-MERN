import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  try {
    let { displayName, userName, email, password, img } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    let newUser = await User.create({
      displayName,
      userName,
      email,
      hashedPassword,
      img,
    });

    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    return res.status(201).json({
      message: "User created successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    let users = await User.find();
    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};
