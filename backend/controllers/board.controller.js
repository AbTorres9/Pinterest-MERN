import Board from "../models/board.model.js";
import Pin from "../models/pin.model.js";
import mongoose from "mongoose";

export const getUserBoards = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    // NORMAL WAY
    const boards = await Board.find({ user: userId });
    const boardsWithPinDetails = await Promise.all(
      boards.map(async (board) => {
        const pinCount = await Pin.countDocuments({ board: board._id });
        const firstPin = await Pin.findOne({ board: board._id });

        return {
          ...board.toObject(),
          pinCount,
          firstPin,
        };
      })
    );

    res.status(200).json(boardsWithPinDetails);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error fetching board", error: error.message });
  }
};
