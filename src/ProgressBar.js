import React from "react";


const ProgressBar = (props) => {

    const { bgcolor, completed, unit } = props;
  
    const progressbarStyles = {
      height: '100%',
      width: `${unit*100}px`,
      backgroundColor: bgcolor,
    }
  
    return (
      
      <div style={progressbarStyles}>
        {completed !== undefined && <span>{completed}{"%"}</span>}
      </div>
   
    );
  };
  
  export default ProgressBar;