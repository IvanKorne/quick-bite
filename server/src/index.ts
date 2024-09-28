import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_DB!)
  .then(() => console.log("connected to db"));

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3010;

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
