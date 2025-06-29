import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom';
import { icons, LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
const AdminSidebar = () => {
    const User={
        firstName:'Admin',
        lastname:'User',
        imgaUrl:assets.profile,
    }
    const adminNavLink=[
        {name:'Dashboard' ,path:'/admin' ,icons:LayoutDashboardIcon},
        {name:'Add Shows' ,path:'/admin/add-shows' ,icons:PlusSquareIcon},
        {name:'List Shows' ,path:'/admin/list-shows' ,icons:ListIcon},
        {name:'List Bookings' ,path:'/admin/list-booking' ,icons:ListCollapseIcon},

    ]
  return (
    <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm'>
  <img className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' src={User.imgaUrl} alt="sidebar" />
  <p className='mt-2 text-base max-md:hidden'>{User.firstName} {User.lastname}</p>

  <div className='w-full mt-6'>
    {adminNavLink.map((link, index) => (
      <NavLink
        key={index}
        to={link.path}
        end
        className={({ isActive }) =>
          `relative flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-2 w-full py-3 px-4 text-gray-400 hover:bg-gray-100/5 ${
            isActive ? 'bg-[#d63855f6]/15 text-[#D63854]' : ''
          }`
        }
      >
        {({ isActive }) => (
          <>
            <link.icons className='w-5 h-5' />
            <p className='text-xs md:text-sm text-center'>{link.name}</p>
            {isActive && <span className='w-1.5 h-full rounded-l bg-[#D63854] absolute right-0'></span>}
          </>
        )}
      </NavLink>
    ))}
  </div>
</div>

  )
}

export default AdminSidebar



