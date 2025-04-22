import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ pin: postId })
      .populate("user", "userName img displayName")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching requested comments",
      error: error.message,
    });
  }
};

export const addComment = async (req, res) => {
  const { description, pin } = req.body;

  const userId = req.userId;
  const comment = await Comment.create({ description, pin, user: userId });

  res.status(201).json(comment);
};
