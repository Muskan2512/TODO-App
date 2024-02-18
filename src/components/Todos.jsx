import React from 'react'
import Todo from './Todo'
import toast from 'react-hot-toast'
const Todos = ({todoContainer,setTodoContainer,deleteTodo,saveTasks}) => {
  return (
    <div className='w-[100%] flex-col  mx-auto  '>
      {todoContainer.map((title,index)=>{
        {/* console.log(todoContainer.indexOf(title)) */}
        return <Todo title={title} index={index} todoContainer={todoContainer} saveTasks={saveTasks} setTodoContainer={setTodoContainer} deleteTodo={deleteTodo}/>
      })}
    </div>
  )
}

export default Todos
