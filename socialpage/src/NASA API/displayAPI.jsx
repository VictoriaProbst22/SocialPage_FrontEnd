import React from "react";
import { useState } from "react";
import axios from "axios";

const DisplayApi = ({pictureResults}) => {
    console.log('Picture Props: ', pictureResults);



    return ( <div>
        <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
    </div> );
}
 
export default DisplayApi;