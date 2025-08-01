import { useState } from "react";
import Api from "../utils/api";

const Sidebar = ({ filters, activeFilter, setActiveFilter, filteredJobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = async (id) => {
    try {
      const res = await Api.get(`/jobs/${id}`);
      setSelectedJob(res.data);
      console.log("Job details fetched successfully:", res.data);
    } catch (error) {
      console.error("Failed to fetch job details", error);
    }
  };

  const handleBackToList = () => {
    setSelectedJob(null);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar Filters */}
      <div className="hidden lg:flex w-full lg:w-60 bg-white text-black flex-col justify-start items-center p-4 gap-6">
        <div className="text-xl font-bold mb-2">Job Filters</div>
        <div className="flex flex-col gap-3 items-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedJob(null);
              }}
              className={`px-4 py-2 text-sm lg:text-base rounded-lg font-medium w-[120px] text-center transition duration-200 ${
                activeFilter === filter
                  ? "text-white bg-[linear-gradient(to_top,#5ee7df_0%,#b490ca_100%)]"
                  : "hover:bg-blue-100 text-gray-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        {/* Small screen filter buttons */}
        <div className="lg:hidden mb-4 overflow-x-auto">
          <div className="flex gap-3 w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedJob(null);
                }}
                className={`whitespace-nowrap px-4 py-2 text-sm rounded-lg font-medium transition duration-200 ${
                  activeFilter === filter
                    ? "text-white bg-[linear-gradient(to_top,#5ee7df_0%,#b490ca_100%)]"
                    : "hover:bg-blue-100 text-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Title */}
        <h1 className="text-2xl font-bold mb-4">
          {selectedJob
            ? `Job: ${selectedJob.title}`
            : `Showing: ${activeFilter === "All" ? "All Jobs" : activeFilter}`}
        </h1>

        {/* Back Button */}
        {selectedJob && (
          <button
            onClick={handleBackToList}
            className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            ← Back to Job List
          </button>
        )}

        {/* Job Cards or Selected Job */}
        {!selectedJob ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition cursor-pointer"
                onClick={() => handleJobClick(job._id)}
              >
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-500">{job.salary}</p>
                <p className="text-green-400 mb-1">post Date:{new Date(job.postedAt).toLocaleDateString("en-GB")}</p>
                
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Job Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-2xl font-bold mb-2">{selectedJob.title}</h1>
              <p className="text-gray-600 mb-1"><strong>Company:</strong> {selectedJob.company}</p>
              <p className="text-gray-600 mb-1"><strong>Location:</strong> {selectedJob.location}</p>
              <p className="text-gray-600 mb-1"><strong>Salary:</strong> {selectedJob.salary}</p>
              <p className="text-gray-600 mb-1"><strong>Vacancy:</strong> {selectedJob.vacancy}</p>
              <p className="text-gray-600 mb-1"><strong>Gender:</strong> {selectedJob.gender}</p>
              <p className="text-gray-600 mb-1"><strong>Skills:</strong> {selectedJob.skills}</p>
              <p className="text-gray-600 mb-1"><strong>Experience:</strong> {selectedJob.experience}</p>
              <p className="text-gray-600"><strong>Type:</strong> {selectedJob.type}</p>
              <p className="text-gray-600"><strong>category:</strong> {selectedJob.category}</p>
              
              <p className="text-gray-600 mb-1"><strong className="text-green-500">start Date:</strong> {new Date(selectedJob.startDate).toLocaleDateString("en-GB")}</p>
              <p className="text-gray-600 mb-1"><strong className="text-red-500">Last Date:</strong> {new Date(selectedJob.lastDate).toLocaleDateString("en-GB")}</p>

            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">📝 Description</h2>
              <p className="text-gray-700">{selectedJob.description}</p>
            </div>

            {/* About */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">📢 About {selectedJob.title} </h2>
              <p className="text-gray-700">{selectedJob.about}</p>
            </div>

            {/* Links */}
            <div className="bg-white rounded-xl shadow-md p-6">
  <h2 className="text-xl font-semibold mb-2">📎 INFO LINKS</h2>
  <div className="space-y-2 text-blue-600 underline">
    <a href={selectedJob.links.link1} target="_blank" rel="noopener noreferrer">
      🔗 LINK #1 
    </a>
    <br />
    <a href={selectedJob.links.link2} target="_blank" rel="noopener noreferrer">
      🔗 LINK #2
    </a>
    
  </div>
</div>


            
          </div>
        )}

        {/* No jobs */}
        {!selectedJob && filteredJobs.length === 0 && (
          <p className="text-gray-500 mt-4">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
