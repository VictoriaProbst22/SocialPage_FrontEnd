
//import pages
import Navbar from "./NavBar";
import DisplayPageData from "./SocialPages/DisplayPage";
import AddNewPost from "./SocialPages/AddFeed";

//import technologies 
import React, { useState, useEffect } from "react";
import axios from "axios";




function App() {

  const [page, setPage] = useState([])
  const [post, setPost] = useState([])


  const addToPage = async() =>{
    try {
      let response = await axios.post('http://127.0.0.1:8000/page/')
      setPost(response.data)
      console.log(response.data)
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
    addToPage();
  }, [])



  return (
    <div>
      <Navbar/>
      <AddNewPost pageData={page} />
      <DisplayPageData pageData={post}/>
      
    </div>
  );
}

export default App;
