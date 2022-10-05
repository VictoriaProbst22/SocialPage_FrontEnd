import React, { useState} from "react";

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


    return ( 
    <form onSubmit={handleSubmit}>
        <div>
        <input type="date" name="search_term" value={sTerm} onChange={onChange}></input>
        <button type="submit"> Search </button>


    </div>
    
        </form> );
}
 
export default SearchApi;