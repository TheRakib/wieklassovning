
import React from "react";




//jsx : const Header =<h1> </h1>  React.createElement(....)
const Header = (props) => {

    return (
        <div>
             <h1> Det här en rubrik {props.name}</h1>
            {props.location}

            {localStorage.getItem('valuefromForm')}
        </div>
    )
}
export default Header;

//skapa en footer element och skicka year= 2020  //dynamisk år med help av
// js Date egenskapen som props. 