import React from 'react';

import "../styles/App.css";

const Pagination = ({pagesArray,page,changePage}) => {
  return (
    <div className="page__wrapper">
        {pagesArray.map(pNumber => (
          <span 
            key={pNumber} 
            className={pNumber === page ? 'page page__current' : 'page'}
            onClick={() => changePage(pNumber)}
            >{pNumber}</span>
        ))}
    </div>
  );
};

export default Pagination;  