import React from 'react'

function Container({children}) {
  return (
    <div className='w-full px-10 mx-auto'>
      {children}
    </div>
  )
}

export default Container
