import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../utils/api";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    Api.get(`/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error("Job not found", err));
  }, [id]);

  if (!job) return <p className="text-center mt-10">Loading job details...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto mt-4 space-y-6">
      {/* 1️⃣ Section: Job General Info */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.company}</p>
        <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
        <p className="text-gray-600 mb-1"><strong>Salary:</strong> {job.salary}</p>
        <p className="text-gray-600 mb-1"><strong>Vacancy:</strong> {job.vacancy}</p>
        <p className="text-gray-600 mb-1"><strong>Gender:</strong> {job.gender}</p>
        <p className="text-gray-600 mb-1"><strong>Skills:</strong> {job.skills}</p>
        <p className="text-gray-600 mb-1"><strong>Experience:</strong> {job.experience}</p>
        <p className="text-gray-600"><strong>Type:</strong> {job.type}</p>
      </div>

      {/* 2️⃣ Section: Description */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">📝 Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>

      {/* 3️⃣ Section: About */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">📢 About Company</h2>
        <p className="text-gray-700">{job.about}</p>
      </div>
    </div>
  );
};

export default JobDetails;
