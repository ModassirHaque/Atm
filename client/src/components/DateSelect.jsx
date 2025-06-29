import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import Navbar from "./Navbar"
const DateSelect = ({dateTime,id}) => {
    const navigate=useNavigate();
    const [selected ,setSelected]=useState();
    const onBookHandler=()=>{
        if(!selected){
            return toast("please select a date")
        }
        navigate(`/movies/${id}/${selected}`)
        scrollTo(0,0);
    }
  return (
    <div id='dateSelect' className='pt-30'>
     <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-[#f8456619] border border-[#f845661b] roounded-lg'>
      <BlurCircle top='-100px' left='-100px'/>
      <BlurCircle top='100px' right='0px'/>
      <div>
        <p className='text-lg font-semibold'>Choose Date</p>
        <div className='flex items-center gap-6 text-sm mt-5'>
            <ChevronLeftIcon width={28}/>
            <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                {Object.keys(dateTime).map((date)=>(
                    <button onClick={()=>setSelected(date)} key={date} className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-ponter ${selected===date?"bg-[#f84565] text-white":"border border-[#f845664f]"}`} >
                        <span>{new Date(date).getDate()}</span>
                        <span>{new Date(date).toLocaleDateString("en-US" , {month:"short"})}</span>
                    </button>
                ))}
            </span>
            <ChevronRightIcon  width={28}/>
        </div>
      </div>
      <button onClick={onBookHandler } className='bg-primary text-white px-8 py-3 mt-6 rounded hover:bg-[ #f84566e] tranisition-all curson-pointer'>Book Now</button>
     </div>
    </div>
  )
}

export default DateSelect



