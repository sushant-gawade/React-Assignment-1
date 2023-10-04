import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination">
      {/* Previous button */}
      <button disabled>Previous</button>
      {/* Page numbers */}
      <a href="/page/1" className="active">
        1
      </a>
      <a href="/page/2">2</a>
      {/* Add more pages here */}
      {/* Next button */}
      <button>Next</button>
    </div>
  );
};

export default Pagination;
