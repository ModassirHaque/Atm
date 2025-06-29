import React, { useEffect } from 'react'
import { useState } from 'react';
import Title from '../../components/admin/Title'; 
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import { dateFormat } from '../../lib/dateFormat';
const ListBooking = () => {
  const currency=import.meta.env.VITE_CURRENCY;
  const [bookings,setBookings]=useState([]);
  const [loading,setLoading]=useState(true);

  const getAllBookings=async ()=>{
    setBookings(dummyBookingData)
    setLoading(false);
  }
  useEffect(()=>{
     getAllBookings();
  },[])
  return !loading ?(
    <>
        <Title text1="Booking" text2="List"></Title>
        <div className='max-w-4xl mt-6 overflow-x-auto'>
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className='bg-[#D63854]/20 text-left text-white'>
            <th className='p-2 font-medium pl-5'>User Name</th>
            <th className='p-2 font-medium'>Movie Name</th>
            <th className='p-2 font-medium'>Show Time</th>
            <th className='p-2 font-medium'>Seats</th>
            <th className='p-2 font-medium'>Amount</th>
            </tr>
          </thead>
          <tbody className='text-sm font-light'>
              {bookings.map((item, index)=>(
                <tr key={index} className='border-b border-[#D63854]/20 bg-[#D63854]/5 even:bg-[#D63854]/10'>
                  <td className='p-2 min-w-45 pl-5 '>{item.user.name}</td>
                  <td className='p-2 min-w-45 '>{item.show.movie.title}</td>
                  <td className='p-2 min-w-45 '>{dateFormat(item.show.showDateTime)}</td>
                  <td className='p-2 min-w-45 '>{Object.keys(item.bookedSeats).map(seat=>item.bookedSeats[seat]).join(",")}</td>
                  <td className='p-2 min-w-45 '>{currency} {item.amount} </td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
    </>
  ):<Loading/>
}

export default ListBooking