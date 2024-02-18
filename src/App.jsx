import React from 'react'
import './App.css'
import Input from './components/Input'
import Todos from './components/Todos'
import toast from 'react-hot-toast'
import List from './components/List'

import { MdDelete } from "react-icons/md";
import { IoMdSave } from "react-icons/io";

import { useState } from 'react'
// in our application save task will remain saved even if they are deleted.

const App = () => {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoContainer, setTodoContainer] = useState([]);

  const [deletedTasks, setDeleted] = useState([]);
  const [saveTodo, setSaveTodo] = useState([]);

  const [saveClicked,setSaveClicked]=useState(false);
  const [deleteClicked,setDeleteClicked]=useState(false);

  function changeHandler(value) {
    if(value!==''){setTodoTitle(value);}
  }
  function addTodo() {
    todoContainer.push(todoTitle);
    setTodoContainer(todoContainer);
    setTodoTitle("");
  }
  function saveTasks(tosaveTask){
    saveTodo.push(tosaveTask);
    setSaveTodo(saveTodo);
    toast.success("Task Saved")
  }
  function deleteTodo(todeleteTitle) {
    deletedTasks.push(todeleteTitle);

    let newTodoContainer = todoContainer.filter(title => {
      return title !== todeleteTitle.toLowerCase()
    })
    setTodoContainer(newTodoContainer)
    toast.success("Deleted Todo");
  }
  return (
    <div className='w-[100%] h-fit min-h-[100vh] bg-[whitesmoke] flex justify-center '>

    <div className='flex flex-col gap-4 w-[60%] md:w-[70%] sm:w-[80%] min-[320px]:w-[100%]  h-fit  justify-center items-center p-[1rem]' >
      <p className='text-[2rem] text-red-300 font-[600]'>Todo App</p>
      <Input todoTitle={todoTitle} changeHandler={changeHandler} addTodo={addTodo} />
      <Todos todoContainer={todoContainer} setTodoContainer={setTodoContainer} saveTasks={saveTasks} deleteTodo={deleteTodo} />
    </div>
    <div className="buttons  w-fit h-fit flex gap-2 mt-8">
    <IoMdSave className='cursor-pointer text-[2rem] text-blue-400 ' onClick={()=>{setSaveClicked(true)}} />
    {saveClicked && <List type="Save" clickedArr={saveTodo} setSaveClicked={setSaveClicked}/>}
    </div>

    </div>
  )
}

export default App
