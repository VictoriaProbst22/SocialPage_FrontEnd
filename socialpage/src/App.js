
//import pages
import Navbar from "./NavBar/NavBar";
import DisplayPageData from "./SocialPages/DisplayPage";
import SearchApi from "./NASA API/SearchAPI";

//import technologies 
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayApi from "./NASA API/DisplayAPI";

// THIS IS GOING TO TAKE TIME AS IT IS A PERSONAL PROJECT AND ALSO APPLYING FOR SOFTWARE DEVELOPEMENT JOBS. THANKS FOR UNDERSTANDING


function App() {

  const [page, setPage] = useState([])
  const [picture, setPicture] = useState([])

//Get NASA Picture By Search Date that is input by user. 

  const getPictureData = async(userInput) => {
    try {
        let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=MwXfSmgO8f2fkgnrhdhwjJQSgXFvKkVnrNjHU92S&date=${userInput}`)
        console.log('Response Data: ', response.data)
        setPicture(response.data);
    } catch (error) {
        console.log(error.response.data)
    }
}



//Get Social Page Information 

  const getPageData = async() =>{
    try {
      let response = await axios.get(`http://127.0.0.1:8000/page/`);
      setPage(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  useEffect(()=>{
    getPageData();

  }, [])

  let dictionary = 
    Object.entries(picture)
    .map( ([key, value]) => ` ${key} :  ${value}` )
  
  

  return (
    <div>
      <Navbar/>
      <DisplayPageData pageData={page}/>
      <SearchApi pictureData={getPictureData} />
      <DisplayApi  pictureResults={dictionary} />
    </div>
  );
}

export default App;
