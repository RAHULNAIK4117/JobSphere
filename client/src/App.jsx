import Api from "./utils/api";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import About from "./components/About.jsx";


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
        filters={["All", "government Job", "Private Job", "part-time Job", "self-employment Job"]}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredJobs={filteredJobs}
      />
      

      <About/>
      <Footer/>

      
    </>
  );
}

export default App;
