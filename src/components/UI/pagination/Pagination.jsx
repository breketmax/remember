import React from 'react';
import { getPagesArray} from "../../utils/pages";
import classes from "./Pagintaion.module.css"

const Pagination = ({totalPages,page,changePage}) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes.pageWrapper}>
        {pagesArray.map(pNumber => (
          <span 
            key={pNumber} 
            className={pNumber === page ? [classes.page,classes.pageCurrent].join(" ") : classes.page}
            onClick={() => changePage(pNumber)}
            >{pNumber}</span>
        ))}
    </div>
  );
};

export default Pagination;  