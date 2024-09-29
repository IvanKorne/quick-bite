import express from "express";
import {
  createCurrentUser,
  getCurrentUser,
} from "../controllers/myUserController";
const router = express.Router();

router.post("/", createCurrentUser as any);
router.get("/", getCurrentUser as any);

export default router;
