import React from 'react'
import AddTodo from './AddTodo'
import Display from './Display'

const Box = () => {


  return (
    <div className='container mx-auto mt-10 space-y-10'>
      <div className='border border-gray-300 p-5 bg-white bg-opacity-10 rounded-lg align-middle '>
        <AddTodo />
      </div>
      
      <div className='border border-gray-300 p-5 bg-white bg-opacity-10 rounded-lg align-middle'>
        <Display />
      </div>
    </div>
  )
}

export default Box