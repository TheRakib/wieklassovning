
import React from "react";
import Header from "./Header";


const Main = (props)=>{
return (
    <div >
          <Header  name={"Rakib"}  kurs={"React"} />
          {props.test}
          This is the main div
   </div>
   
  )
}
  //enkla komponentar : funtional component.

//npx create-react-app minapp
//src mappen och skapade nytt src och lagt till index.js


//dagen agenda: 
   //functional component 

   //parentchild relation
   //props  :  properties
   //bootstrap, scss i react
   // projekt : fixa card component
//Intro till class component class component 
export default Main;