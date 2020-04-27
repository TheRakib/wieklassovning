import React, {Component} from "react";
import axios from "axios";

class Apitest extends Component{
     
     state= {dataFromApi_title:"", image:"", }


onClickApi(){
    axios
    .get("http://localhost:1337/products")
    .then(  (res)=>{
        console.log(res);

        this.setState({dataFromApi_title: res.data[0].title,
         
         image: res.data[0].image.formats.small.url
        
        
        })

    })

//"http://localhost:1337/products" + url 
}
    
     render(){
         return(
             <div>
                <button onClick={this.onClickApi.bind(this)}>Hämta</button>
                {this.state.dataFromApi_title}
         
         <img src={"http://localhost:1337"+this.state.image}/>
                {this.state.image}
             </div>
         )
     }


}

export default Apitest;