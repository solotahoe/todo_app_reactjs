import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

function About(){
    const navstyle = {
        color: "white",
        fontSize:"1.1em",
        textDecoration:"none",
        backgroundColor:"#008CBA",
        height:"50px",
        width:"100px",
        borderRadius:"10px",
        padding:"2px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    };

    return (
        <nav>
            <Link to="/" style={navstyle}>
                <h1> LOGO</h1>
            </Link>


            <ul className="nav-links">
                <Link to="/shop" style={navstyle}>
            <li>Shop</li>
        </Link>


                <Link to="/about" style={navstyle}>
                    <li>About us</li>
                </Link>
            </ul>
        </nav>

    );
    



}

export default About;