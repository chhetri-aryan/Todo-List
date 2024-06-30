import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { PencilIcon } from '@heroicons/react/16/solid'
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { addTodo, editTodo, deleteTodo, toggleTodo, loadTodos } from '../../Redux/todoSlice';
import { useSelector, useDispatch } from 'react-redux';


export default function EditModal({ isOpen, close, item }) {

    const todos = useSelector(state => state.todos.todos);

    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [editingId, setEditingId] = useState(item.id);
    const dispatch = useDispatch();



    useEffect(() => {
        setName(item.name);
        setDescription(item.description);
        // setEditingId(item.setEditingId);
      }, [item, todos]);
    


    const handleSaveEdit = () => {
        if (name.trim() === '') return;
        dispatch(editTodo({
          id: editingId,
          updatedTodo: { name, description }
        }));
        close()
      };


    return (
        <>


            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                <div className='flex gap-3'>
                                    Edit
                                    <PencilIcon className="size-6 fill-white/90" />
                                </div>
                                <div className="w-full max-w-md px-4 mt-5">
                                    <Field>
                                        <Label className="text-sm/6 font-medium text-white">Name</Label>
                                        <Input
                                            className={clsx(
                                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                            )}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}

                                        />

                                        <Label className="text-sm/6 font-medium text-white">Description</Label>
                                        <Input
                                            className={clsx(
                                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                            )}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Field>
                                </div>
                            </DialogTitle>
                            {/* <p className="mt-2 text-sm/6 text-white/50">
                               After Editing Please Click on the Save Button to Save it!
                            </p> */}
                            <div className="flex mt-7 gap-2">

                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-black/85 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={handleSaveEdit}
                                >
                                    Save
                                </Button>
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-black/85 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={close}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
