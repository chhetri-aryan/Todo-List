import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/16/solid'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {toggleTodo } from '../../Redux/todoSlice';
import EditModal from './EditModal';
import DeleteModal from './Delete';

export default function Dropdown({item}) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }


  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white/50 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-sky-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <ChevronDownIcon className="size-4 fill-white" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-36 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
              onClick={openModal}

            >
              <PencilIcon className="size-4 fill-white/30" />
              Edit
              
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/35" />

          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
              onClick={() => dispatch(toggleTodo(item.id))}
            >
              {
                !item.completed ? 
                <>
                <CheckIcon className="size-4 fill-white/30" />
                Completed
                </> 
                :
                <>
                <XMarkIcon className="size-4 fill-white/30" />
                  Incomplete
                </>
                
              }
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/35" />
        
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-red-700"
              onClick={openDeleteModal}
            >
              <TrashIcon className="size-4 fill-white/30" />
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

      <EditModal isOpen={isModalOpen} close={closeModal} item={item} />
      <DeleteModal isOpen={isDeleteModalOpen} close={closeDeleteModal} item={item} />
      
    </div>
  )
}
