import React from 'react'

const Loader = () => {
  return (
    <div className="wrap absolute top-0 left-0 w-screen h-screen bg-black flex items-center justify-center" style={{ zIndex: 1000 }}>
      <div className="contain rotate-45 w-24 grid grid-cols-3 gap-1">
        {new Array(9).fill().map((_, i) => (
          <div key={i} className="box w-7 h-7 bg-[#65cdef]"></div>
        ))}
      </div>
    </div>
  )
}

export default Loader
