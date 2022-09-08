import axios from "axios";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import AddNewPost from "./AddFeed";

const DisplayPageData = ({pageData}) => {

    const deletePost = async (el)=>{
        try {
            let response = await axios.delete(`http://127.0.0.1:8000/page/${el.id}/`)
        } catch (error) {
            console.log(error.message)
        }
       
    }

  
    

    return ( <div>
        <h2>Feed: </h2>
        <div> <AddNewPost/> </div>
        {pageData.map((item, index)=>{

            
            return(
                
                <div>
                    
                    {index + 1}
                    <li>{item.name}</li> 
                    <ul>{item.text}</ul> 
                    <ul>{item.date}</ul>
                    <button onClick={()=> deletePost(item)}>Delete</button>
                    <CustomButton message= "Like" />
                    <CustomButton message= "Dislike" />
                    <hr></hr>
                    
                </div>
                
            )
            
        })}
    </div>
     );
}
 
export default DisplayPageData;