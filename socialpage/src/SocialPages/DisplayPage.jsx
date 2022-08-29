import React from "react";

const DisplayPageData = ({pageData}) => {

    console.log('This is pageData: ', pageData)

    

    return ( <div>
        <h2>Feed: </h2>
        {pageData.map((item, index)=>{
            return(
                <div>
                    <li>{index + 1}</li>
                    <ul>{item.name}</ul> 
                    <ul>{item.text}</ul> 
                    <ul>{item.date}</ul>
                </div>
            )
        })}
    </div> );
}
 
export default DisplayPageData;