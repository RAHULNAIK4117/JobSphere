import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddJob from "../components/AddJob";
import AllJobs from "../components/AllJobs";
import UpdateJob from "../components/UpdateJob";
import Welcome from "../components/Welcome";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-amber-300 p-2 rounded-2xl">INDIAN JOB LELO </h1>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Logout</button>
        </nav>
        <main className="p-4 overflow-y-auto">
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="update/:id" element={<UpdateJob />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;