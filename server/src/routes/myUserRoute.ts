import express from "express";
import {
  createCurrentUser,
  getCurrentUser,
} from "../controllers/myUserController";
import { jwtCheck } from "../middleware/auth";
const router = express.Router();

router.post("/", jwtCheck, createCurrentUser as any);
router.get("/", jwtCheck, getCurrentUser as any);

export default router;
