import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar'
import './App.css'
import './MyStyle.css'
import webLogo from './assets/weblogo.png'
import ToDoListContainer from './ToDoListContainer'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
          {/* bg-gradient-to-r  from-cyan-500 to-blue-500 Sample Gradient Background*/}
        <main className='bg-gradient-to-r from-indigo-700 via-purple-600 to-fuchsia-600  min-w-screen min-h-screen  '>
              <NavBar/>
              <section className='w-screen h-[85vh] flex justify-center items-center '>
                <ToDoListContainer/>
              </section>
          </main>
    </>
  )
}
export default App
