import React from 'react'
import { MdDelete } from "react-icons/md";
import { IoMdSave } from "react-icons/io";
import toast from 'react-hot-toast';

const Todo = (props) => {
  const title = props.title;
  const deleteTodo=props.deleteTodo; 
  const saveTasks=props.saveTasks;

  function checked(event){
    if(event.target.checked===true){
      toast.success("Task Done")
    }
  }
  
  return (
    <div className='flex bg-blue-400 w-[50%] mx-auto my-[1rem] justify-between items-center px-4 py-3 text-white rounded-md md:w-[90%] sm:w-[90%] min-[320px]:w-[90%]' >
      <p className='font-[500] text-[1.2rem] capitalize'>{title}</p>
      <div className='flex  gap-4 text-[2rem] min-[320px]:text-[1.5rem]'>
        <input type="checkbox"  className='text-[2rem] w-[1.5rem] cursor-pointer outline-none text-green-300' onClick={(event)=>{checked(event)}}/>
        <IoMdSave className='cursor-pointer ' onClick={()=>{saveTasks(title)}}/>
        <MdDelete className='cursor-pointer text-red-400' onClick={()=>{deleteTodo(title)}}/>
      </div>
    </div>
  )
}

export default Todo
