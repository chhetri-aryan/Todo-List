import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Display = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <>
    { !todos.length == 0 ? 
        todos.map((item, key) => (
            <Card item={item} key={key} />
        ))
        :
        <div className='text-2xl text-center'>Your todo is Empty, Please add some items.</div>
    }
    </>
  )
}

export default Display