import React from "react";


const DisplayApi = (props) => {
    console.log('Picture Results: ', props.pictureResults);

  //map Results of "Title, Date, Explanation" & Research Media and URL to display

    return ( <div>
      <h3>Astronomy Picture of the Day</h3>
      <div>
        {props.pictureResults.map((item)=>{
          return(<div>
            <li>{item.explanation}</li>
          </div>)
        })}
      </div>
    </div>);
}
 
export default DisplayApi;