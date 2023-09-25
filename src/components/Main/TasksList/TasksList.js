import React, { useContext,useState ,useEffect} from "react";
import Task from "./Task/Task";
import './TasksList.css'
import TaskContext from "../TaskContext";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TasksList = () => {

   const TasksList = useContext(TaskContext);
   const [previewTasklist, setpreviewTasklist] = useState(TasksList.tasks);

   useEffect(() => { //to update this state if initail state is updated
      
      if(TasksList.previewFilter==='All'){
         setpreviewTasklist(TasksList.tasks)
      }
      if(TasksList.previewFilter==='Active'){
         setpreviewTasklist(TasksList.tasks.filter((task)=>!task.completed))
      }
      if(TasksList.previewFilter==='Completed'){
         setpreviewTasklist( TasksList.tasks.filter((task)=>task.completed))
      }
   }, [TasksList.previewFilter,TasksList.tasks]);  

   return (
      <DragDropContext onDragEnd={TasksList.rearrangeEnd}>
         <Droppable droppableId="droppable-1">
            {(provided) => (
               <ul className="tasklist" {...provided.droppableProps} ref={provided.innerRef}>
                  {
                     previewTasklist.map((item, index) => (
                        <Task
                           content={item.taskContent}
                           id={item.id}
                           key={item.id}
                           index={index}
                           complete={item.completed}
                        >
                        </Task>
                     ))
                  }
                  {provided.placeholder}
               </ul>
            )}
         </Droppable>

      </DragDropContext>
   )
}
export default TasksList;