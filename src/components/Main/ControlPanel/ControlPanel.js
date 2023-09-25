import React from "react"
import { useState ,useContext} from "react";
import TaskContext from "../TaskContext";
import MediaQuery from 'react-responsive';
import "./ControlPanel.css"

function RadioButtonList(props) {
   const TasksList = useContext(TaskContext);
   const options = ['All', 'Active', 'Completed'];
   const getFilter = () => {
      const filter = JSON.parse(localStorage.getItem('preview-filter'))
      if (filter !== null) {
         return filter;
      }
      else {
         return 'All'
      }
   }
   const [selectedOption, setSelectedOption] = useState(getFilter);
   
   const handleOptionChange = (event) => {
      const newOption = event.target.value;
      setSelectedOption(newOption);
      TasksList.sendPreviewFilter(newOption)
   };
   localStorage.setItem(('preview-filter'), (JSON.stringify(selectedOption)))

   return (
         <ul className="filters">
            {options.map((option) => (
               <li key={option}>
                     <input
                        id={option}
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                        className="mr-2"
                     />
                  <label htmlFor={option}>
                     {option}
                  </label>
               </li>
            ))}
         </ul>
   );
}

const ControlPanel = () => {
   const TasksList = useContext(TaskContext);
   const TasksLeft = TasksList.tasks.filter((task)=>!task.completed).length;

      return <React.Fragment>
      <MediaQuery maxWidth={767}>
         {(matches) => {
            if (matches) {
               // Render content for small screens
               return <div className="small">
               <div className="colors">
               <p>{TasksLeft} items left</p>
               <button className="clear-complete" onClick={TasksList.clearComplete}>Clear Completed</button>
               </div>
               <div className="colors">
               <RadioButtonList></RadioButtonList>
               </div>
            </div>
            } else {
               // Render content for larger screens
               return <div className="controls large colors">
                  <p>{TasksLeft} items left</p>
                  <RadioButtonList></RadioButtonList>
                  <button className="clear-complete" onClick={TasksList.clearComplete}>Clear Completed</button>
               </div>

            }
         }}
      </MediaQuery>

   </React.Fragment>

}
export default ControlPanel