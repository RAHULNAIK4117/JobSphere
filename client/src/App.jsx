import Api from "./utils/api";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Login from './pages/login.jsx';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/footer.jsx';


function App() {

   const [jobData, setJobData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
  Api.get("/jobs") 
    .then((res) => setJobData(res.data))
    .catch((err) => console.error("Failed to fetch jobs:", err));
}, []);

  const filteredJobs = jobData.filter((job) => {
  const titleMatch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
  const categoryMatch = activeFilter === "All" || job.category.toLowerCase() === activeFilter.toLowerCase();

  if (searchQuery.trim() !== "") {
        return titleMatch;
  }
 
  return titleMatch && categoryMatch;
});


  return (
    <>
    

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
      



      <Routes>
        <Route path='/login' element={<Login />} />
        
      </Routes>
      <Footer/>

      
    </>
  );
}

export default App;
