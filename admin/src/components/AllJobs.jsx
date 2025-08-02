import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      toast.error("Failed to fetch jobs.");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await API.delete(`/jobs/${id}`);
        fetchJobs();
        Swal.fire("Deleted!", "The job has been deleted.", "success");
      } catch (error) {
        toast.error("Failed to delete job.");
      }
    }
  };

  return (
    <div className="px-4 py-6 sm:px-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📋 All Uploaded Jobs
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md bg-white">
        <table className="w-full table-auto text-sm sm:text-base">
          <thead className="bg-blue-50 sticky top-0 z-10">
            <tr>
              <th className="p-4 text-left font-semibold text-gray-700">Title</th>
              <th className="p-4 text-left font-semibold text-gray-700">Start Date</th>
              <th className="p-4 text-left font-semibold text-gray-700">End Date</th>
              <th className="p-4 text-left font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="hover:bg-gray-50 border-b transition duration-200">
                <td className="p-4">{job.title}</td>
                <td className="p-4">{new Date(job.startDate).toLocaleDateString("en-IN")}</td>
                <td className="p-4">{new Date(job.lastDate).toLocaleDateString("en-IN")}</td>
                <td className="p-4 flex gap-2 flex-wrap">
                  <button
                    onClick={() => navigate(`/admin/update/${job._id}`)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full transition cursor-pointer"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full transition cursor-pointer"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No jobs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
