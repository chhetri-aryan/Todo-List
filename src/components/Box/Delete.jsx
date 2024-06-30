import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { WarningAmberOutlined } from '@mui/icons-material'
import { addTodo, editTodo, deleteTodo, toggleTodo, loadTodos } from '../../Redux/todoSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function DeleteModal({isOpen, close, item}) {

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(item.id));
    close();
  }
  
  return (
    <>
    

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-red-400">
                Delete <WarningAmberOutlined  className='size-2'/>
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Are you Sure You want to Delete?
              </p>
              <div className="flex mt-4 gap-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-black/85 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-700 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={handleDelete}
                >
                 Yes
                </Button>

                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-black/85 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  No
                </Button>

              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
