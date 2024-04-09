import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar'
import './App.css'
import './MyStyle.css'
import webLogo from './assets/weblogo.png'
import ToDoListContainer from './ToDoListContainer'
import { DarkThemeContext } from './context/context'
function App() {
  const [count, setCount] = useState(0)
  const [isDark,SetIsDark] = useState(false)
  return (
    <>
          {/* bg-gradient-to-r  from-cyan-500 to-blue-500 Sample Gradient Background*/}
        <DarkThemeContext.Provider value={{isDark,SetIsDark}}>
        <main className={`transition-all duration-700 ${isDark?"bg-gradient-to-r from-indigo-700 via-purple-600 to-fuchsia-600":"bg-gradient-to-br from-gray-800 to-black"}  min-w-screen min-h-screen `}>
              <NavBar/>
              <section className='w-screen h-[85vh] flex justify-center items-center '>
                <ToDoListContainer/>
              </section>
          </main>
          </DarkThemeContext.Provider>
    </>
  )
}
export default App
