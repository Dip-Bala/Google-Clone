import React, {useState} from 'react'
import {RoutesPath} from './components/RoutesPath';
import {Navbars} from './components/Navbars';
import {Footer} from './components/Footer';
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className = {darkTheme? 'dark' : ''}>

      <div className = "bg-white dark:bg-slate-400 dark:text-gray-900 min-h-screen">
        <Navbars 
        theme = {darkTheme}
        handleClick={()=> setDarkTheme(!darkTheme)}/>
        <RoutesPath/>
        <Footer/>
      </div>
    </div>
  )
}

export default App