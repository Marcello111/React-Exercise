import React from "react";
import Data from './Data';
import ProgressBar from './ProgressBar';

//Create a new array with map, iterate over the Data array, and push unit property to it. The unit shows the number in hours which is a result of deducting startdate from enddate.
let value = Data.map(item => ({...item, unit: (new Date(item.enddate) - new Date(item.startdate)) / 60000 / 60}));


//Iterate over the value array and display the required data.
const Tasks = () => (
  
  <table className="table">
    <thead>
      <tr className="main-table-header"><th rowSpan="2" colSpan="4"><h2>activities/hourly</h2></th><th colSpan="8"> <h3>Monday 4th November 2019</h3></th></tr> 
      <tr className="time"><th>10 am</th><th>11 am</th><th>12 am</th><th>1 pm</th><th>2 pm</th><th>3 pm</th><th>4 pm</th><th>5 pm</th></tr>
    </thead>
    <tbody>
      
      { value.map((dataDetail, i) => (

        <tr key={ i }>
          <td colSpan="4" className="activity-box">
            <h3>{ dataDetail.name } </h3>
            <p>{ dataDetail.description }</p>
          </td>
          <td>            
            <ProgressBar bgcolor="#FFBE22" completed={ dataDetail.progress } unit={ dataDetail.unit }/>
          </td>          
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      ))}

    </tbody>
  </table>
);

export default Tasks;