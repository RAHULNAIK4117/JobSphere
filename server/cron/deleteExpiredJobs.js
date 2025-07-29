const cron = require("node-cron");
const Job = require("../models/job");

cron.schedule("0 0 * * *", async () => {
  try {
    const now = new Date();
    const result = await Job.deleteMany({ lastDate: { $lt: now } });
    console.log(`🧹 Auto cleanup: ${result.deletedCount} expired jobs deleted`);
  } catch (err) {
    console.error("❌ Error deleting expired jobs:", err);
  }
});