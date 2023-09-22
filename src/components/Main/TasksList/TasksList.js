import React, { useContext } from "react";
import Task from "./Task/Task";
import './TasksList.css'
import TaskContext from "../TaskContext";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TasksList = () => {

   const TasksList = useContext(TaskContext);


   return (
      <DragDropContext onDragEnd={TasksList.rearrangeEnd}>
         <Droppable droppableId="droppable-1">
            {(provided) => (
               <ul className="tasklist" {...provided.droppableProps} ref={provided.innerRef}>
                  {
                     TasksList.tasks.map((item, index) => (
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
                  <li>vvvvvvvvvvv</li>
               </ul>
            )}
         </Droppable>

      </DragDropContext>
   )
}
export default TasksList;