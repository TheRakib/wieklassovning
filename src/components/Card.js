import React from "react";


const Card = ()=>{
    //reserved word in js
    //inline styling i jsx/react : 
    // style={{  width : "18rem"}}
    //egenskap till ex. width ska inte ha nån citationstecken
    // och Värdet till ex. "18rem" ska ha citationstecken

    return (
        <div className={"card"} style={{width: "18rem"}}>
     <img src={"..."} className={"card-img-top"} alt={"..."}/>
     
  <div className={"card-body"}>
    <h5 className={"card-title"}>Card title</h5>
    <p className={"card-text"}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={"#"} className= {"btn btn-primary"}>Go somewhere</a>
  </div>
</div>

    )
}

export default Card;