import express from "express";
const router = express.Router();
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";

router.post("/", createJob);
router.get("/", getAllJobs);
router.get("/stats", showStats);
router.delete("/:id", deleteJob);
router.patch("/:id", updateJob);

export default router;
