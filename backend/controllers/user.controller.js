import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Follow from "../models/follow.model.js";

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

export const getUser = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ userName: username });

    const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

    const followerCount = await Follow.countDocuments({ following: user._id });
    const followingCount = await Follow.countDocuments({ follower: user._id });

    const token = req.cookies.token;

    if (!token) {
      res.status(200).json({
        ...detailsWithoutPassword,
        followerCount,
        followingCount,
        isFollowing: false,
      });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (!err) {
          const isExists = await Follow.exists({
            follower: payload.userId,
            following: user._id,
          });

          res.status(200).json({
            ...detailsWithoutPassword,
            followerCount,
            followingCount,
            isFollowing: isExists ? true : false,
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

export const registerUser = async (req, res) => {
  const { userName, displayName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const newHashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    userName,
    displayName,
    email,
    hashedPassword: newHashedPassword,
  });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

  res.status(201).json(detailsWithoutPassword);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

  res.status(200).json(detailsWithoutPassword);
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({ message: "Logout successful" });
};

export const followUser = async (req, res) => {
  try {
    let { username } = req.params;
    let user = await User.findOne({ userName: username });

    const isFollow = await Follow.exists({
      follower: req.userId,
      following: user._id,
    });

    if (isFollow) {
      await Follow.deleteOne({
        follower: req.userId,
        following: user._id,
      });
    } else {
      await Follow.create({
        follower: req.userId,
        following: user._id,
      });
    }

    return res.status(200).json({
      message: "Successful",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error fetching followers", error: error.message });
  }
};
