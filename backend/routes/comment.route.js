import express from "express";
import {} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: "This is working fine",
  });
});

export default router;
