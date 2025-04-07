import express from "express";
import { createUser, listUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", listUsers);

router.post("/create", createUser);

export default router;
