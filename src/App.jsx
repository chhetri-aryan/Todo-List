import './App.css'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, loadTodos } from '../src/Redux/todoSlice';
import Head from './components/head/Head'
import Box from './components/Box/Box'


function App() {

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dispatch(loadTodos(storedTodos));
    setIsLoaded(true);
  }, [dispatch]);


  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const handleAddTodo = () => {
    if (name.trim() === '' || description.trim() === '') return;
    dispatch(addTodo({
      id: Date.now(),
      name,
      description,
      completed: false
    }));
    setName('');
    setDescription('');
  };

  return (
    <>
      <div className='container mx-auto lg:px-52 md:px-24 sm:px-0'>
        <div>
          <Head />
        </div>

          <Box handleAddTodo={handleAddTodo} />


      </div>




    </>
  )
}

export default App
