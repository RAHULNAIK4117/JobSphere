import { useState } from "react";
import toast from "react-hot-toast";
import API from "../utils/api";

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    gender: "",
    salary: "",
    vacancy: 1,
    skills: "",
    experience: "",
    type: "",
    startDate: "",
    lastDate: "",
    description: "",
    about: "",
    links: { link1: "", link2: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "link1" || name === "link2") {
      setFormData((prev) => ({
        ...prev,
        links: { ...prev.links, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/jobs", formData);
      toast.success("Job uploaded successfully!");
      setFormData({
        title: "",
        company: "",
        location: "",
        category: "",
        gender: "",
        salary: "",
        vacancy: 1,
        skills: "",
        experience: "",
        type: "",
        startDate: "",
        lastDate: "",
        description: "",
        about: "",
        links: { link1: "", link2: "" },
      });
    } catch (err) {
      toast.error("Failed to upload job.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 sm:p-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">🚀 Upload a New Job</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Job Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">📌 Job Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["title", "company", "location", "category", "gender", "salary", "skills", "experience", "type"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}

              <input
                type="number"
                name="vacancy"
                value={formData.vacancy}
                onChange={handleChange}
                placeholder="Vacancy"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="date"
                name="lastDate"
                value={formData.lastDate}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">🔗 Related Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="link1"
                value={formData.links.link1}
                onChange={handleChange}
                placeholder="Link 1 (optional)"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="link2"
                value={formData.links.link2}
                onChange={handleChange}
                placeholder="Link 2 (optional)"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Description & About */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">📝 Description</h3>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Job Description"
              rows={4}
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">🏢 About Company</h3>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="About the company"
              rows={4}
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer "
            >
              ✅ Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
