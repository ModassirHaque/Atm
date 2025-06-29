import { ArrowRight, Calendar, CalendarIcon, Clock, ClockIcon } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("./assets/backgroundImage.png")] bg-cover bg-center h-screen'>
        <img src={assets.marvelLogo} alt="logo"  className='max-h-11 lg:h-11 mt-20 '/>
        <h1>Guardian <br />of the Galaxy</h1>
        <div className='flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Sci-Fi</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5'/>
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5'/>
            </div>
        </div>
        <p className='max-w-md text-gray-300'>In a post-apocalyptic world where citeies ride on wheele and consume each other to survive , two people meet in London and try to stop a conspiracy.</p>
        
        <button
        onClick={() => navigate('/movies')}
        className="flex items-center gap-2 px-6 py-2 text-white text-sm font-semibold bg-[#ff4f5a] hover:bg-[#e04851] rounded-full shadow-md hover:shadow-lg transition duration-300"
>
        Explore Movies
       <ArrowRight className="w-5 h-5" />
       </button>

    </div>
  )
}

export default HeroSection