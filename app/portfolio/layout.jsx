import React from 'react'

const layout = ({children}) => {
  return (
      <div>
          <h1 className="text-6xl">Our Work</h1>
          {children}
    </div>
  )
}

export default layout