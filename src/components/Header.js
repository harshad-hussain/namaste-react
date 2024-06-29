
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header =() =>{
  //if there is no depenancy array => useEffect()  will be called after every render of the component
  // if the depenancy array is empty [] =>useEffect()  will be called on inital render 
  // if the depenancy array is [loginbtn]=> will be called everytime when the btn gets updates
  

  const [loginbtn,setloginbtn] = useState("Login");

  useEffect(()=>{
    console.log("useEffect called");
  },[loginbtn]);

  
    return(
      <div className="header">
        <div className="logo-container">
           <img className="logo"
            src={LOGO_URL} 
            />
        </div>
        <div className ="nav-items">
           <ul>
             <li>Home</li>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Cart</li>
             <button className="login-btn" onClick={()=>{
              loginbtn ==="Login" ?
              setloginbtn("Logout"):setloginbtn("Login") ;
             }}> {loginbtn}</button>
           </ul>
        </div>
      </div>
    )
  };

  export default Header;