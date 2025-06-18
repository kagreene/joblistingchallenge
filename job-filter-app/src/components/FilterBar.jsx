export default function FilterBar({ filters, removeFilter, clearFilters }) {
  return (
    <div className="filter-bar">
      <div className="filter-tags">
        {filters.map((tag, index) => (
          <div key={index} className="filter-pill">
            <span className='filter-text'>{tag}</span>
            <button className="remove-filter" onClick={() => removeFilter(tag)}>×</button>
          </div>
        ))}
      </div>
      <button className="clear-btn" onClick={clearFilters}>Clear</button>
    </div>
  );
}
