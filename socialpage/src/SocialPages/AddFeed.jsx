import axios from "axios";
import React from "react";
import useCustomForm from "../hooks/useCustomForm"

const AddNewPost = (props) => {
  
    let initialValues ={
        name: "",
        text: "",
        date: "",
    };

    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, addToPage)

    
  async function addToPage(){
    try {
        let response = await axios.post("http://127.0.0.1:8000/page/", formData)
    } catch (error) {
        console.log(error.message)
    }
  }
   

  
  

    return (<div>
        <form onSubmit={handleSubmit}>
            <label>
                Name: {" "}
                <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange} />
            </label>
            <label>
                Post: {" "}
            </label>
            <input
            type='text'
            name='text'
            value={formData.text}
            onChange={handleInputChange} />
            <lable>
                Date: {" "}
            </lable>
            <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleInputChange} />

            <button> Add To Page! </button> 



        </form>

    </div>
    );
}
 
export default AddNewPost;
