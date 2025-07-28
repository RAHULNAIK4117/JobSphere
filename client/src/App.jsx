import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Login from './pages/login.jsx';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import { jobData } from './jobs/jobdata.js';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (searchQuery !== "" || activeFilter === "All" || job.type === activeFilter)
  );

  return (
    <>
      <Navbar 
        title='indian job leloo'
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Sidebar
        filters={["All", "Gov Job", "Private Job", "Part-Time", "Self-Employment"]}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredJobs={filteredJobs}
      />

      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
