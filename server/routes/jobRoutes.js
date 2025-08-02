const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const verifyToken = require("../middleware/authMiddleware");

//CREATE job
router.post("/",verifyToken, async (req, res) => {
  try {
    const job = new Job(req.body);
    const saved = await job.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create job", details: err.message });
  }
});

//GET all jobs 
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs", details: err.message });
  }
});

//GET job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving job", details: err.message });
  }
});

//UPDATE job by ID
router.put("/:id",verifyToken, async (req, res) => {
  try {
    const updated = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating job", details: err.message });
  }
});


router.delete("/:id",verifyToken, async (req, res) => {
  try {
    const deleted = await Job.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting job", details: err.message });
  }
});

module.exports = router;
