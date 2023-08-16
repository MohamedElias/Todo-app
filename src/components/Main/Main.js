import React from "react";
import './Main.css'
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import InputTask from "./InputTask/InputTask";
const Main=()=>{
   return <div className="mainContainer">
      <div className="header">
         <p>TODO</p>
         <ThemeSwitcher></ThemeSwitcher>
      </div>
         <InputTask></InputTask>
         
   </div>
}
export default Main