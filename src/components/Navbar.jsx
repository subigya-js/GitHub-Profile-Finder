import React from 'react'
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div>
            <div className='w-screen bg-gray-800 h-[8vh] flex items-center px-5'>
                <FaGithub className='text-white' size={30} />
                <h1 className='text-gray-200 px-3 text-lg'>Github Profile Finder</h1>
            </div>
        </div>
    )
}

export default Navbar