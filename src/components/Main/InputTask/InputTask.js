import React,{useState} from "react"
import './Task.css'
import Addbutton from "../Addbutton/Addbutton";

const InputTask = () => {

   const [inputTaskValue,setInputTaskValue]=useState('');

   const handleInputChange = (event) => {
      setInputTaskValue(event.target.value);
   };
   const addtask =()=>{
      console.log(inputTaskValue);
      setInputTaskValue('')
   }
   return <div className="Task">
      <Addbutton disabled={inputTaskValue===''?true:false} onClick={addtask}></Addbutton>

      <input
         onChange={handleInputChange}
         type="text"
         placeholder="Creat a New Todo.."
         value={inputTaskValue}
         >
         </input>
   </div>
}
export default InputTask