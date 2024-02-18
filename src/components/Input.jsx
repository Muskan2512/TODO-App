import React from 'react'

const Input = ({todoTitle,changeHandler,addTodo}) => {
 
  return (
    <div className='w-[100%] bg-yellow-200 flex justify-center items-center min-[320px]:w-[100%]'>
      <input type="text" required placeholder='Enter the todo' className='px-4  border-1 border-red-300 py-3 text-xl w-[50%] outline-none md:w-[100%] sm:w-[100%] min-[320px]:w-[100%] ' value={todoTitle}
        onChange={(event)=>{changeHandler(event.target.value)}}
      />
      <button className='px-8 py-3 bg-blue-500 text-white font-[500] text-xl min-[320px]:text-[1rem]' onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input
