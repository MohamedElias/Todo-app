import React, { useReducer } from "react";
import TaskContext from "./TaskContext";



const getTasks = () => {
   const storedTasks = JSON.parse(localStorage.getItem('tasks-list'))
   if (storedTasks !== null) {
      return storedTasks;
   }
   else {
      return []
   }
}
const tasklistReducer = (state, action) => {
   if (action.type === 'ADD') {
      const updatedTasks = [...state, action.newTask];
      localStorage.setItem(('tasks-list'), (JSON.stringify(updatedTasks)))
      return updatedTasks
   }
   if (action.type === 'RMV') {
      const updatedTasks = state.filter((task) => { return task.id !== action.id })
      localStorage.setItem(('tasks-list'), (JSON.stringify(updatedTasks)))
      return updatedTasks
   }
   if (action.type === 'IsComplete') {
      const targetTask = state.find((task) => { return task.id === action.id })
      const targetIndex = state.indexOf(targetTask)
      const updatedTasks = [...state]
      updatedTasks[targetIndex] = { ...targetTask, completed: !targetTask.completed }
      localStorage.setItem(('tasks-list'), (JSON.stringify(updatedTasks)))
      return updatedTasks
   }

   if (action.type === 'arrangeEnd') {
      if (!action.dragTarget.destination) return state;
      const updatedTasks=[...state]
      const [reorderedItem] = updatedTasks.splice(action.dragTarget.source.index, 1);   
      updatedTasks.splice(action.dragTarget.destination.index, 0, reorderedItem);
      localStorage.setItem(('tasks-list'), (JSON.stringify(updatedTasks)))
      return updatedTasks
   }

   return getTasks
}

const TaskProvider = (props) => {
   /* localStorage.setItem(('tasks-list'),(JSON.stringify(List))) */
   const [tasklist, dispatchTasklist] = useReducer(tasklistReducer, getTasks());

   const addTaskHandler = (content) => {
      const Task = {
         id: new Date().getTime().toString(),
         taskContent: content,
         completed: false,
         isDragging: false
      }
      dispatchTasklist({ type: 'ADD', newTask: Task })
   }

   const removeTaskHandler = (id) => {
      dispatchTasklist({ type: 'RMV', id: id })
   }

   const changeStateHandler = (id) => {
      dispatchTasklist({ type: 'IsComplete', id: id })
   }

   const RearrangeEndHandler = (dragTarget) => {
      dispatchTasklist({ type: 'arrangeEnd', dragTarget:dragTarget })
   }

   const taskContext = {
      tasks: tasklist,
      addTask: addTaskHandler,
      removeTask: removeTaskHandler,
      changeState: changeStateHandler,
      rearrangeEnd: RearrangeEndHandler,

   }


   return <TaskContext.Provider value={taskContext}>
      {props.children}
   </TaskContext.Provider>
}
export default TaskProvider;