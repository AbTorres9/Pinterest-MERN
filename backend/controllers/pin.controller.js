import Pin from "../models/pin.model.js";

export const getPins = async (req, res) => {
  try {
    const pageNumber = Number(req.query.cursor) || 0;
    const Limit = 21;
    const Pins = await Pin.find()
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
