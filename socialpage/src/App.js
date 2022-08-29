
//import pages
import Navbar from "./NavBar";
import DisplayPageData from "./SocialPages/DisplayPage";

//import technologies 
import React, { useState, useEffect } from "react";
import axios from "axios";




function App() {

  const [page, setPage] = useState([])




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



  return (
    <div>
      <Navbar/>
      <DisplayPageData pageData={page}/>
    </div>
  );
}

export default App;
