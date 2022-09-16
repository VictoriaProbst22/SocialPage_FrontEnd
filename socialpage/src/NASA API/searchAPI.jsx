import React, { useState, useEffect } from "react";
import axios from "axios";




const SearchApi = (props) => {

  const [sTerm, setSTerm] = useState('')

    function handleSubmit(event){
        event.preventDefault();
            console.log('SearchTerm: ', sTerm);
        props.pictureData(sTerm);
    
  }

  const onChange= (event)=> {
    const { value } = event.target
    setSTerm(value)
  }


    return ( <div>
        <input id="date" type="date" name="search_term" value={sTerm} onChange={onChange}></input>
        <button type="submit"> Search </button>


    </div> );
}
 
export default SearchApi;