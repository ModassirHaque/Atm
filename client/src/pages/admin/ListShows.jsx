import React, { useEffect, useState } from 'react'
import Title from '../../components/admin/Title'
import { dummyShowsData } from '../../assets/assets';
import { dateFormat } from '../../lib/dateFormat';
export const ListShows = () => {
  const currency=import.meta.env.VITE_CURRENCY;
  const [shows, setShows] = useState([]);
  const [loading,setLoading]=useState(true);

  const gatAllShows= async ()=>{
    try{
        setShows([{
          movie:dummyShowsData[0],
          showDateTime:"2025-06-30T02:30:00.000Z",
          showPrice:59,
          occupiedSeats:{
              A1:'user_1',
              B1:'user_2',
              C1:'user_3',
          }
        }]);
        setLoading(false)
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    gatAllShows();
  },[])
  return !loading?(
    <>
        <Title text1="List" text2=" Shows"></Title>
        <div className='max-w-4xl mt-6 overflow-x-auto'>
          <table className='w-full border-collapse rounded-md overlfow-hidden text-nowrap'>
            <thead>
              <tr className='bg-[#D63854]/20 text-left text-white'>
                <th className='p-2 font-medium pl-5'>Movie Name</th>
                <th className='p-2 font-medium'>Show Time </th>
                <th className='p-2 font-medium'>Total Bookings </th>
                <th className='p-2 font-medium'>Earnings</th>
              </tr>
            </thead>
            <tbody className='font-light text-sm'>
                 {shows.map((show,index)=>(
                  <tr key={index} className='border-b border-[#D63854]/10 bg-[#D63854]/5 even:bg-[#D63854]/10 '>
                   <td className='p-2 min-w-45 pl-5'>{show.movie.title}</td>
                   <td className='p-2'>{dateFormat(show.showDateTime)}</td>
                   <td className='p-2'>{Object.keys(show.occupiedSeats).length}</td>
                   <td className='p-2'>{currency} {Object.keys(show.occupiedSeats).length *show.showPrice}</td>
                  </tr>
                 ))}
            </tbody>
          </table>
        </div>
    </>
  ):<loading/>
}
