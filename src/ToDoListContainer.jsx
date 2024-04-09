import React, { useEffect, useRef, useState,useContext} from 'react'
import './App.css'
import './MyStyle.css'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { DarkThemeContext } from './context/context';
function ToDoListContainer() {
    const [newTask,setNewTask] = useState("");
    const {isDark,SetIsDark} = useContext(DarkThemeContext);
    const [todos, setNewToDo] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });
    useEffect(() => {
        try {
          saveData();
        } catch (error) {}
    }, [todos]);
    const [showFinished, setshowFinished] = useState(true);
    let inputTask = useRef() ;
    function toggleCompleted(index) {
        const newtodos = [...todos]; // Create a copy of todos array
        newtodos[index] = { ...newtodos[index], isCompleted: !newtodos[index].isCompleted }; // Update the isCompleted property of the specific todo
        setNewToDo(newtodos); 
    }
    function saveData(){
        localStorage.setItem("data",JSON.stringify(todos))
    }
    function handleAdd(){
        setNewToDo([...todos,{newTask,isCompleted:false}])
        setNewTask("")
    }
    function handleEdit(todo,index){
        const newTodos = todos.slice(0, index).concat(todos.slice(index + 1));
        setNewTask(todo.newTask)
        setNewToDo(newTodos);
        // const newtodos = [...todos]; // Create a copy of todos array
        // newtodos.reduce()
        // setNewToDo(newtodos);
    }
    function handleDelete(index){
        const newTodos = todos.slice(0, index).concat(todos.slice(index + 1));
        setNewToDo(newTodos);
    }
  return (
    <div className='w-[45vw] lg:w-[94vw] px-8 h-[85%] bg-[#ffffff37] overflow-y-scroll border-[1px] border-solid border-[#ffffff62] rounded-xl '>
        <span className="title mt-4 text-white text-4xl font-bold font-sans flex justify-center items-center gap-2">To Do Tracker
            <LuListTodo width={30} style={{marginTop:"10px"}}/>
        </span>
        <span className='flex pt-6 pb-3  justify-center relative '>
            <input onKeyDown={(e)=>{
                e.key == "Enter" && handleAdd()
            }}  ref={inputTask} value={newTask} onChange={(e)=>setNewTask(e.target.value)}  type="text" placeholder='Add A Task' className={`nikhil2   font-sans font-bold w-full rounded-3xl px-5 py-2 bg-gradient-to-r ${isDark ? 'placeholder:text-white text-white from-blue-400 to-blue-800 ' : 'from-blue-50 to-blue-100 text-black placeholder:text-black '}`} />
            <button className={`absolute right-0 rounded-full top-[28%] nikhil3 p-3`} onClick={handleAdd}>
                <FaPlus fill='white'/>
            </button>
        </span>
        <span className='flex w-full justify-end pt-1 pb-4'>
        <button className='  flex gap-2 font-bold text-[15px] text-white' onClick={()=>{
            setshowFinished(!showFinished);
        }}>
            Show Finished {showFinished?<MdOutlineRemoveRedEye fill='white' size={23}/>:<FaEyeSlash fill='white' size={23}/>}
        </button>
        </span>
        
        <span className={`flex flex-col justify-between items-between gap-6 ${todos.length === 0 && "items-center"}`}>
            {todos.length === 0 && <div className='text-3xl font-sans font-bold text-white'>Add Your New Task</div>}
            {todos.map((todo,index)=>{
                return (showFinished||!todo.isCompleted)&& <span key={index} className='flex justify-between items-center'>
                <span className='flex gap-2'>
                <button onClick={()=>{
                    toggleCompleted(index);
                }}>
                {todo.isCompleted?<FaRegSquareCheck fill='white' size={"25px"} />:<FaRegSquare fill='white' size={"25px"} />}
                </button>
                <p className={`text-white text-lg font-[rubik]  ${todo.isCompleted?"line-through":""}`}>{todo.newTask}</p>
                </span>
                <span className='flex'>
                <CiEdit className="cursor-pointer" size={25} fill='white' onClick={()=>{handleEdit(todo,index)}}/>
                <MdDelete className="cursor-pointer" size={25} fill='white' onClick={()=>{handleDelete(index)}}/>
                </span>
                </span>
            })}
        </span>
    </div>
  )
}

export default ToDoListContainer