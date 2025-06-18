export default function JobCard({ job , onTagClick }) {
    const allTags = [job.role, job.level, ...(job.languages || []), ...(job.tools || [])];
  return (
    <div className={`job-card ${job.featured ? 'featured' : ''}`}>
      {/* Wrap image + text in a new flex container */}
      <div className="job-info">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="company-logo"
        />
        <div className="job-content">
          <div className="job-header">
            <span className="company-name">{job.company}</span>
            {job.new && <span className="new-badge">New!</span>}
            {job.featured && <span className="featured-badge">Featured</span>}
          </div>
          <h2 className="position">{job.position}</h2>
          <div className="job-details">
            <span className="date-posted">{job.postedAt}</span>
            <span>&bull;</span>
            <span className="job-type">{job.contract}</span>
            <span>&bull;</span>
            <span className="location">{job.location}</span>
          </div>
        </div>
      </div>
      <div className="job-tags">
        {allTags.map((tag,index) => (
          <span
            key={index}
            className="tag"
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </span>
        ))}
   { /*    <span className="tag">{job.role}</span>
        <span className="tag">{job.level}</span>
        {job.languages.map((language, index) => (
          <span key={index} className="tag">{language}</span>
        ))}
        {job.tools.map((tool, index) => (
          <span key={index} className="tag">{tool}</span>
        ))}*/}
      </div>
    </div>
  );
}
