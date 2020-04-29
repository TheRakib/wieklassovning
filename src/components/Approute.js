import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Card from "./Card";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Formular from "./Formular"
import Eventtest from "./Eventtest";


import Apitest from "./Apitest";
import FileUpload from "./FileUpload";

const Approute = ()=>{

    return (
        <div>
              
            <BrowserRouter>

                    <Navbar/>
                  
                    <Apitest/>

  <Switch>
                    <Route path="/" component={Main} exact   ></Route>
                   <Route path="/fileupload" component= {FileUpload}  exact></Route>
                    <Route path ="/card" exact component= {Card}></Route>
                    <Route component= {NotFound} ></Route>
                    <Eventtest />
                     
                     <Formular />
                    
                    </Switch>
    
            </BrowserRouter>

        </div>
    )
}

// gatsby , next.js 

// fixa 404 sidan 
// exact path 


export default Approute;