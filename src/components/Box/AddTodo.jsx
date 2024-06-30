import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo, toggleTodo, loadTodos } from '../../Redux/todoSlice';


const AddTodo = () => {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (name.trim() === '') return;
        dispatch(addTodo({
          id: Date.now(),
          name,
          description,
          completed: false
        }));
        setName('');
        setDescription('');
        // console.log(todos)


      };

    return (
        <>

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-7">
                    <div className='col-span-3'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300
                         text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500" placeholder="Shopping list" onChange={(e) => setName(e.target.value)} value={name}
                            />
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="des" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" id="des" className="bg-gray-50 border border-gray-300
                         text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500" placeholder="Snacks" onChange={(e) => setDescription(e.target.value)} value={description}
                            />
                    </div>

                    <div className='mt-6'>
                        <button className="align-center inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                            onClick={handleAddTodo}
                            >
                                Add
                            </span>
                        </button>
                    </div>
                </div>
            </form>



        </>
    )
}

export default AddTodo