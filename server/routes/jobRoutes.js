const express = require("express");
const router = express.Router();
const Job = require("../models/job");

// POST job (without image/pdf upload)
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    const saved = await job.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;