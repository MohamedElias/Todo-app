import React from "react";
import './Main.css'
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import InputTask from "./InputTask/InputTask";
import ControlPanel from "./ControlPanel/ControlPanel";
import TasksList from './TasksList/TasksList'

import TaskProvider from "./TasksProvider";
const Main = () => {
   return <div className="mainContainer">
      <div className="header">
         <p>TODO</p>
         <ThemeSwitcher></ThemeSwitcher>
      </div>
      <TaskProvider>
      <InputTask></InputTask>
      <TasksList></TasksList>
      <ControlPanel></ControlPanel>
      <div className="footer">
         Drag and drop to reorder list</div>
      </TaskProvider>
   </div>
}
export default Main