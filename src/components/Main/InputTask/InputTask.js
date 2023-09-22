import React,{useState,useContext} from "react"
import './InputTask.css'
import Addbutton from "../Addbutton/Addbutton";
import TaskContext from "../TaskContext";

const InputTask = () => {
   const TasksList=useContext(TaskContext);
   const [inputTaskValue,setInputTaskValue]=useState('');

   const handleInputChange = (event) => {
      setInputTaskValue(event.target.value);
   };
   const addTask =()=>{
      if(inputTaskValue.trim() !==''){
         TasksList.addTask(inputTaskValue)
      }
      setInputTaskValue('')
   }

   return <div className="Task">
      <Addbutton disabled={inputTaskValue===''?true:false} onClick={addTask}></Addbutton>

      <input
         type="text"
         onChange={handleInputChange}
         onKeyDown={(e)=>{e.key==='Enter' && addTask()}}
         placeholder="Creat a New Todo.."
         value={inputTaskValue}
         >
         </input>
   </div>
}
export default InputTask