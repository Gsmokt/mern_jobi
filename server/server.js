import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
dotenv.config();
const app = express();
import "express-async-errors";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRouter.js";
const port = process.env.PORT || 5000;
import authenticatedUser from "./middleware/auth.js";

app.use(cors());

app.use(express.json());

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticatedUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
