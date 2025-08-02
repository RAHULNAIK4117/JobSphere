import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/api";
import toast from "react-hot-toast";

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    API.get(`/jobs/${id}`)
      .then((res) => setFormData(res.data))
      .catch(() => toast.error("Failed to load job details"));
  }, [id]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/jobs/${id}`, formData);
      toast.success("Job updated successfully!");
      navigate("/admin/all-jobs");
    } catch(error) {
      toast.error("Failed to update job.");
      console.error("Update Job Error:", error);
    }
  };

  if (!formData) return <p className="p-4">Loading...</p>;

  return (
    <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Job</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "title",
          "company",
          "location",
          "category",
          "gender",
          "salary",
          "skills",
          "experience",
          "type",
        ].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="border p-2 rounded"
          />
        ))}

        <input
          type="number"
          name="vacancy"
          value={formData.vacancy}
          onChange={handleChange}
          placeholder="Vacancy"
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate?.slice(0, 10)}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="lastDate"
          value={formData.lastDate?.slice(0, 10)}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="link1"
          value={formData.links?.link1 || ""}
          onChange={handleChange}
          placeholder="Link 1"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="link2"
          value={formData.links?.link2 || ""}
          onChange={handleChange}
          placeholder="Link 2"
          className="border p-2 rounded"
        />
      </div>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 rounded w-full mt-4"
      />
      <textarea
        name="about"
        value={formData.about}
        onChange={handleChange}
        placeholder="About Company"
        className="border p-2 rounded w-full mt-4"
      />

      <button type="submit" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">Update</button>
    </form>
  );
};

export default UpdateJob;
