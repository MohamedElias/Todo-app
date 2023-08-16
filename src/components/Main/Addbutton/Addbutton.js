import React from "react";
import './Addbutton.css'
const Addbutton=(props)=>{


   return (
      <button className="Addbtn enabled"
      disabled={props.disabled}
      onClick={props.onClick}></button>
   )
}
export default Addbutton;