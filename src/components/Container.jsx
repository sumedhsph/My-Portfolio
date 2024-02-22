import React from 'react'

function Container({children}) {
  return (
    <div className='w-full px-10 py-16 mx-auto'>
      {children}
    </div>
  )
}

export default Container
