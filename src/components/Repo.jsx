import React, { useEffect, useState } from 'react'

const Repo = (props) => {
    const api = `https://api.github.com/users/${props.username}/repos`

    const [repo, setRepo] = useState([])

    const callRepo = async () => {
        try {
            const response = await fetch(api)
            const data = await response.json()

            setRepo(data)
        }

        catch (error) {
            alert("Enter valid Username")
            window.location.reload()
        }
    }

    useEffect(() => {
        callRepo()
    }, [props.username])

    return (
        <>
            <div className='w-screen !!font-repo md:w-[60%] lg:w-[65%] md:fixed md:right-0 flex flex-col'>
                <div className='h-[7vh] bg-gray-500 text-gray-200 flex items-center justify-center'>
                    <p className='text-center'>Repositories</p>
                </div>

                {/* scroll box */}
                <div className='h-[600px] bg-gray-900 pt-3'>
                    <div className='bg-gray-900 text-gray-300 p-4 absolute right-0 w-full md:items-center flex justify-center items-center overflow-y-auto scroll-smooth'>
                        {/* scroll box inner */}
                        <ul className=' flex flex-col w-[80%] gap-4 justify-start h-[62vh] mb-2'>
                            {
                                repo.map((items) => (
                                    <a href={items.html_url} target='__blank' className='bg-gray-600 p-2 rounded-lg cursor-pointer hover:bg-gray-500 hover:scale-110 duration-300'>
                                        <div className='px-3'>
                                            <h1>{items.name}</h1>
                                            <div className='flex items-center text-center'>
                                                <span className='text-sm'>Language used: {items.language == null ? "N/A" : items.language}</span>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Repo