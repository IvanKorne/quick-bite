import express from "express";
import {
  createCurrentUser,
  getCurrentUser,
  updateCurrentUser,
} from "../controllers/myUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";
const router = express.Router();

router.post("/", jwtCheck, createCurrentUser as any);
router.get("/", jwtCheck, getCurrentUser as any);
router.put(
  "/",
  jwtCheck,
  jwtParse as any,
  validateUserRequest as any,
  updateCurrentUser as any
);

export default router;
