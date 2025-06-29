import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import MovieCard from  './MovieCard'
import { dummyShowsData } from '../assets/assets.js';
const FeaturedSection = () => {
    const navigate=useNavigate();
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
         <div className='relative flex items-center justify-between pt-20 pb-10'>
            <p>Now Showing </p>
             <BlurCircle top='0' right='-80px'/>
            <button onClick={()=>navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>View All 
                <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5 '/>
            </button>
         </div>
         <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8 '>
           {dummyShowsData.slice(0,4).map((show)=>(
                 <MovieCard key={show._id} movie={show} />
           ))}
         </div>
         <div className='flex justify-center mt-20'>
               <button onClick={()=>{navigate('/movies') ; scrollTo(0,0)}} className='px-6 py-2 bg-[#ff4f5a] hover:bg-[#e04851] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300'> Show more</button>
         </div>
    </div>
  )
}

export default FeaturedSection