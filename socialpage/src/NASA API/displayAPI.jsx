import React from "react";



const DisplayApi = (props) => {
    console.log('Picture Results: ', props.pictureResults);

    
    
  //map Results of "Title, Date, Explanation" & Research Media and URL to display


    return ( <div>
      <h3>Astronomy Picture of the Day</h3>
    {props.pictureResults.map((item)=>{
      return(<div>
       <a>{item}</a> 
       <hr></hr>
      </div>)
    })}
    </div>);
}
 
export default DisplayApi;