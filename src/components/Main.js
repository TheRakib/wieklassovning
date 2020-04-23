
import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "../style/_main.scss"


class Main extends Component{

    //constructor 
    // Varför anväder vi constructor: 
           //för att kunna sätta ett default värde
    // anropas varje gång det skapas en instance av klassen
   
    constructor(props){
        super(props)
        
        // initial value /default value
        // uppdateras av async function eller event  (när uppdateras state 
        //                    renderas component igen)
        // Visa state data to user 

        //this refererar till instance/kopia/objektet 
        //som använder det här componentet
        this.state = {
            lat:"",
            long:"", 
            count:1
        }
      
      window.navigator.geolocation.getCurrentPosition( success=> {
          this.setState({lat: success.coords.longitude,
                         long: success.coords.latitude})
      }, error=> console.log(error))


    }

  
  
    render(){
        return (
            <div> 
                long: {this.state.long}
                lat : {this.state.lat}
                <Header location= {this.state.long}/>
                 <Card/>

            </div>
        )
    }
}














//class component 

/* class Main extends Component { 

//initallierar state //sätter ett default värde
        state = {  lat:"din latidute", 
                   long:""
                   }

uppdatelocation(){
    window.navigator.geolocation.getCurrentPosition((success)=>{
        console.log(success.coords.latitude)
        //Gör aldrig this.state.lat = success.coords.latitude (gör aldrig så här)
        
        this.setState({lat:success.coords.latitude, long:success.coords.longitude})

    })
        
}
 



//uppdatera state 


// renderas (state uppdatering gör component omrendering)


//din data ska komma från user eller från en api
// state kan vara tomt först 
// state ska uppdateras 
// när state uppdateras uppdatera oxå render.
    render(){
        return (
            <div>
                 {this.uppdatelocation()}
                
                din location adress: {this.state.lat}
                               <div> long:   {this.state.long} </div>  
               
            </div>
        )
    }

}
 */

//functional component 
/* const Main = ()=>{
return (
    <div >
          <Header  name={"Rakib"}  kurs={"React"} />
           
           <Card/>
           <h1 className={"test"}> Testing</h1>
           This is the main div
           <Footer year={2020}/>
   </div>
   
  )
}
  //enkla komponentar : funtional component.
 */
//npx create-react-app minapp
//src mappen och skapade nytt src och lagt till index.js


//dagen agenda: 
   //functional component 

   //parentchild relation
   //props  :  properties
   //bootstrap, scss/sass i react
   // projekt : fixa card component
//Intro till class component class component 
export default Main;