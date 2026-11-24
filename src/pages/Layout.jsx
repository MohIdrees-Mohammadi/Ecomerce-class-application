import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='px-8 sm:px-20 lg:px-30'>
        <Header />
        <Outlet />
        <footer>
            footer
        </footer>
    </div>
  )
}

export default Layout