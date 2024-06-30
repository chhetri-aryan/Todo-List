import React from 'react'
import Dropdown from './Dropdown'
const Card = ({ item }) => {

    return (
        <div className=''>

            <div class="flex flex-wrap p-5">
                <div class="flex-grow text-3xl"> {
                    !item.completed ? item.name.toUpperCase() : <s>{item.name.toUpperCase()}</s>}
                    <div class="mt-2 text-sm">  {!item.completed ? item.description : <s>{item.description}</s>}
                    </div>
                </div>
                <div class="ml-auto">
                    <Dropdown item={item} />
                </div>
            </div>
            <div class="my-1 h-px bg-white/5" />


        </div>
    )
}

export default Card