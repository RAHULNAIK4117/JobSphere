import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = "block px-4 py-2 rounded hover:bg-blue-100";
  const activeClass = "bg-blue-500 text-white";

  return (
    <div className="w-60 bg-white p-4 shadow h-screen">
      <h2 className="text-xl font-bold mb-6 ">B.RAHUL</h2>
      <nav className="flex flex-col gap-2">
        <NavLink to="/admin/add-job" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
          ➕ Add Job
        </NavLink>
        <NavLink to="/admin/all-jobs" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
          📋 All Jobs
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
