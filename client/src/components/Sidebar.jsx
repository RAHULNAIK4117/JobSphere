import { useState } from "react";
import { jobData } from "../jobs/jobdata.js";




const Sidebar = ({ filters, activeFilter, setActiveFilter, filteredJobs }) => {
  

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar - Hidden on small screens */}
      <div className="hidden lg:flex w-full lg:w-60 bg-white text-black flex-col justify-start items-center p-4 gap-6">
        <div className="text-xl font-bold mb-2">Job Filters</div>
        <div className="flex flex-col gap-3 items-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm lg:text-base rounded-lg font-medium w-[120px] text-center transition duration-200 ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 text-gray-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        {/* Top filter for small screens (scrollable) */}
        <div className="lg:hidden mb-4 overflow-x-auto">
          <div className="flex gap-3 w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-4 py-2 text-sm rounded-lg font-medium transition duration-200 ${
                  activeFilter === filter
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Filter title */}
        <h1 className="text-2xl font-bold mb-4">
          Showing: {activeFilter === "All" ? "All Jobs" : activeFilter}
        </h1>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.type}</p>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <p className="text-gray-500 mt-4">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
