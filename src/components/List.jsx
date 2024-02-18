import React from 'react'
import Todo from './Todo'
import { RxCross2 } from "react-icons/rx";
const List = ({type,clickedArr,setSaveClicked}) => {
  return (
    <div className='w-[30vw] flex-col  mx-auto bg-white absolute right-0 transition-all md:w-[40%] sm:w-[50%] min-[320px]:w-[80%]'>
    <RxCross2 className='text-red-300 relative right-0 text-[2rem] font-[900] ' onClick={()=>{setSaveClicked(false)}}/>
      {clickedArr.map((title,index)=>{
        return (<div className='flex bg-blue-400 w-[80%] md:w-[90%] mx-auto my-[1rem] justify-between items-center px-4 py-3 text-white rounded-md' >
      <p className='font-[500] text-[1.2rem] capitalize'>{title}</p>
        <input type="checkbox"  className='text-[2rem] w-[5rem] cursor-pointer outline-none bg-black '/>
     
    </div>)
      })}
    </div>
  )
}

export default List

        {/* <input type="checkbox"  className='text-[2rem] w-[1.5rem] cursor-pointer outline-none text-green-300' onClick={(event)=>{checked(event)}}/> */}