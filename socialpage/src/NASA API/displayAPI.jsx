import React from "react";
import axios from "axios";


const DisplayApi = (props) => {
    console.log('Picture Results: ', props.pictureResults);

    
    const addBook= async (pictureToAdd)=>{
      let newPicture = {
          "title": pictureToAdd.title,
          "date": pictureToAdd.date,
          "explanation": pictureToAdd.explanation,
          
      }
      console.log(newPicture)
       try {
          let response = await axios.post("`https://api.nasa.gov/planetary/apod?api_key=MwXfSmgO8f2fkgnrhdhwjJQSgXFvKkVnrNjHU92S", newPicture) 
          console.log(response.data)
      } catch (error) {
          console.log(error.message)
      }

  }
    
  //map Results of "Title, Date, Explanation" & Research Media and URL to display


    return ( <div>
      <h3>Astronomy Picture of the Day</h3>
    
    </div>);
}
 
export default DisplayApi;