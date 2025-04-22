import Pin from "../models/pin.model.js";
import User from "../models/user.model.js";

export const getPins = async (req, res) => {
  try {
    const pageNumber = Number(req.query.cursor) || 0;
    const search = req.query.search;
    const userId = req.query.userId;
    const boardId = req.query.boardId;
    const Limit = 21;
    const Pins = await Pin.find(
      search
        ? {
            $or: [
              { title: { $regex: search, $options: "i" } },
              { tags: { $in: [search] } },
            ],
          }
        : userId
        ? { user: userId }
        : boardId
        ? { board: boardId }
        : {}
    )
      .limit(Limit)
      .skip(pageNumber * Limit);

    const hasNextPage = Pins.length === Limit;

    return res.status(200).json({
      pins: Pins,
      nextCursor: hasNextPage ? pageNumber + 1 : null,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error fetching pins", error: error.message });
  }
};

export const getPin = async (req, res) => {
  try {
    const { id } = req.params;
    const pin = await Pin.findById(id).populate(
      "user",
      "userName img displayName"
    );

    res.status(200).json(pin);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error fetching requested pin", error: error.message });
  }
};
