import React from 'react'

const FooterEnd = () => {
  return (
    <footer className='w-full dark:text-white dark:bg-gray-900 p-2 bg-white shadow-md shadow-amber-100'>
        <div className='container mx-auto flex flex-col justify-between items-center gap-10'>
            <p className='text-sm text-white'>@ {new Date().getFullYear()} CodeNtraa. | All rights reserved.</p>
        </div>
      
    </footer>
  )
}

export default FooterEnd
