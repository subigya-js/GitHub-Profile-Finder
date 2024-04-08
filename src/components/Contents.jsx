import React, { useEffect, useState } from 'react'
import { GoOrganization } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import Repo from './Repo';

const Contents = (props) => {
    const [userData, setUserData] = useState({})

    const api = `https://api.github.com/users/`

    const getUser = async (username) => {
        try {
            const response = await fetch(api + username)
            const data = await response.json()

            setUserData(data)
        }

        catch (error) {
            alert("Enter valid username")
            window.location.reload()
        }
    }

    useEffect(() => {
        getUser(props.username)
    }, [props.username])

    return (
        <>
            <div className='flex flex-col w-screen h-auto bg-gray-950 min-h-[82vh] md:flex-row'>
                {/* User Information div */}
                <div className='bg-gray-950 text-white w-[100%] md:w-[40%] lg:w-[35%] lg:h-[75vh] md:h-[70vh] flex flex-col px-2 items-center md:justify-around font-userInfo py-3'>
                    <div className='h-[100%] flex items-center justify-center'>
                        <img src={userData.avatar_url} alt='User Pic' className='w-[150px] rounded-full' />
                    </div>

                    <div className='h-[65%] w-full p-1 text-center flex flex-col justify-around'>
                        <div>
                            <h1 className='IdName text-md font-bold'>{userData.name}</h1>
                            <p className='UserName text-xs font-medium'>@{userData.login}</p>
                        </div>

                        {/* Horizontal Line */}
                        <div className='my-3 border border-gray-400'></div>

                        {/* Details */}
                        <div className='flex justify-center items-center py-2'>
                            <ul className='text-xs text-center flex flex-col items-center justify-between h-[100%] gap-5'>
                                <li className='w-[100%] flex px-2 items-center'><GoOrganization size={20} /> <span className='px-5 text-center text-xs'>{userData.company === null ? "N/A" : userData.company}</span></li>
                                <li className='w-[100%] flex px-2 items-center'><IoLocationSharp size={20} /> <span className='px-5 text-center text-xs'>{userData.location === null ? "N/A" : userData.location}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            {/* Repo Container */}
            <Repo username={props.username} />
        </>
    )
}

export default Contents