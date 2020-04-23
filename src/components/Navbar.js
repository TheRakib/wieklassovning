import React from "react";
import {Link } from "react-router-dom";


const Navbar = ()=>{

    return (

        <nav>
            { //<a href="/card" >test</a> 
            }
            <Link to="/">Home</Link>
            <Link to="/card">Tjänster</Link>
        </nav>
    )
}

export default Navbar;