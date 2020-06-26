import React from 'react';
import  '../RenderData/renderdata.css';
import classes from '../pagination/pagination.css';
const input = ( props ) => {
  
   return(
    <div className={classes.pg}>
     <div className={classes.pagnation}>
     <a >❮</a>
     <a >❯</a>
   </div>
  </div>
       
   )

};

export default input;