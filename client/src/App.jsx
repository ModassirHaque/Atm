import React from 'react'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import { Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import { SeatLayout } from './pages/SeatLayout'
import { MyBooking } from './pages/MyBooking'
import { Favorite } from './pages/Favorite'
import {Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import { ListShows } from './pages/admin/ListShows'
import ListBooking from './pages/admin/ListBooking'
export const App = () => {
  const isAdminRoute=useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
     {!isAdminRoute && <Navbar/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies'element={<Movies/>} />
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/> }/>
      <Route path='/my-bookings' element={<MyBooking/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout />} />
      <Route path='/admin/*' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='add-shows' element={<AddShows/>}/>
      <Route path='list-shows' element={<ListShows/>}/>
      <Route path='list-booking' element={<ListBooking/>}/>
      </Route>
     </Routes>
     {!isAdminRoute && <Footer/>}
    </>
  )
}
export default App;


