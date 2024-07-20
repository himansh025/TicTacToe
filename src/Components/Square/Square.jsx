import React from 'react'

function Square(props) {
  return (
    <div className=' border-2 border-black flex  w-full  p-5'>
    <div className='w-14 border-1 text-black border-black bg-white p-5 h-16' onClick={props.onClick} > {props.value}</div>
    </div>
  )
}

export default Square