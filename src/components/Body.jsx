import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import Contents from './Contents';

const Body = () => {
    const [search, setSearch] = useState("")
    const [username, setUsername] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const searchClick = (event) => {
        event.preventDefault()

        setUsername(search)
        setSearch("")
    }

    return (
        <div className='min-h-[92vh]'>
            <div className='h-full bg-gray-900 w-screen min-h-[92vh]'>
                <form className='w-full flex justify-center items-center h-[10vh]' onSubmit={searchClick}>
                    <input onChange={handleChange} value={search} type='text' placeholder='Username' className='py-1 px-2 rounded-md outline-none w-[70%] sm:w-[30%] md:w-[30%] lg:w-[20%] mt-1' />

                    <div className='cursor-pointer'>
                        <IoSearch className='ml-1 text-white hover:scale-105 sm:text-sm' size={20} onClick={searchClick} />
                    </div>
                </form>

                {
                    username === "" ? <>
                        <div className='h-[77vh] text-white flex justify-center items-center text-center'>Search with valid username <br /> (eg: subigya-js)</div>
                    </> :
                        <>
                            {
                                <div className='bg-gray-950 h-auto w-full flex justify-center'>
                                    <Contents username={username} />
                                </div>
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default Body