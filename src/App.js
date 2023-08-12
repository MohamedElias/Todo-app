import React from 'react';
import './App.css';
import Cover from './components/Cover/Cover'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
function App() {
  return (
    <div className='App'>
      <Cover></Cover>
    <h1 className="text-3xl font-bold underline text-red-700">
      Hello world!
    </h1>
    <ThemeSwitcher></ThemeSwitcher>
    </div>
  )
}

export default App;
