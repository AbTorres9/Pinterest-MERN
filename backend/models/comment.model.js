import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    pin: {
      type: Schema.Types.ObjectId,
      ref: "Pin",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
