
//import pages
import Navbar from "./NavBar/NavBar";
import DisplayPageData from "./SocialPages/DisplayPage";
import searchAPI from "./NASA API/searchAPI";

//import technologies 
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchApi from "./NASA API/searchAPI";




function App() {

  const [page, setPage] = useState([])
  const [picture, setPicture] = useState([])


  const getPictureData = async() => {
    try {
        let response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=MwXfSmgO8f2fkgnrhdhwjJQSgXFvKkVnrNjHU92S')
        console.log('Response Data: ', response.data)
        setPicture(response.data.items)
    } catch (error) {
        console.log(error.response.data)
    }
}



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

  useEffect(()=>{
    getPictureData();
}, [])


  return (
    <div>
      <Navbar/>
      <DisplayPageData pageData={page}/>
      <SearchApi pictureData={getPictureData}/>
      
    </div>
  );
}

export default App;
