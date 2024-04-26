import React, {useState} from 'react'
import {Routes} from './components/Routes';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className = {darkTheme? 'dark' : ''}>

      <div className = "bg-white dark:bg-slate-400 dark:text-gray-900 min-h-screen">
        <Navbar 
        theme = {darkTheme}
        handleClick={()=> setDarkTheme(!darkTheme)}/>
        <Routes/>
        <Footer/>
      </div>
    </div>
  )
}

export default App