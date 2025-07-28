import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Login from './pages/login.jsx';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import { jobData } from './jobs/jobdata.js';
import { Jobprovider } from './context/jobcontext.jsx';
import Footer from './components/footer.jsx';

function App() {

   
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (searchQuery !== "" || activeFilter === "All" || job.type === activeFilter)
  );

  return (
    <>
    <Jobprovider>

      <Navbar 
        
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Sidebar
        filters={["All", "Gov Job", "Private Job", "Part-Time", "Self-Employment"]}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredJobs={filteredJobs}
      />
      <Footer/>



      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>

      </Jobprovider>
    </>
  );
}

export default App;
