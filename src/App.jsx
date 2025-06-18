import { useState } from 'react'
import JobCard from './components/JobCard'
import jobs from './data/jobs.json'
import FilterBar from './components/FilterBar'

import './style.css'

function App() {
  // State to hold the list of filters
  const [filters, setFilters] = useState([]);

  // Function to handle adding filters
  const addFilter = (tag) => {
    //Check if tag is already in filters
    //Add filter if not already present
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
    // If tag is already in filters, do nothing
  }

  const filterJobs = (job) => {
    const allTags = [job.role, job.level, ...(job.languages || []), ...(job.tools || [])];
    // If no filters are applied, return true to show all jobs
    if (filters.length === 0) return true;

    // Check if the job matches all filters; use spread to see all languages and tools
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every(filter => allTags.includes(filter));
  }

  const displayedJobs = filters.length === 0 ? jobs: jobs.filter(filterJobs);

  //Function to remove filters
  const removeFilter = (tag) => {
    // Remove the tag from the filters array
    setFilters(filters.filter(filter => filter !== tag));
  };
  // Function to clear all filters
  const clearFilters = () => {
    setFilters([]);
  };


  return (
    <div className="App">
      <header className='page-header'>
        <img src="/images/bg-header-desktop.svg" alt="Header Background" className="header-bg" />
      </header>
      <div className="job-listings-container">
         {filters.length > 0 && (
          <FilterBar
            filters={filters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />
        )}
      {displayedJobs.map((job) => (
        <JobCard key={job.id} job={job} onTagClick={addFilter} />
      ))}
      </div>
      </div>
  );
}

export default App
