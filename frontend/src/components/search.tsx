import React from 'react'

const Search: React.FC = () => {

    return (
        <>
            <div className='w-full max-w-md'>
                <div className='flex flex-col items-center'>
                <input 
                    type="text"
                    placeholder="Search..."
                    className="w-full p-5 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className='bg-green-500 rounded-lg text-center text-white p-3 mt-4  hover:bg-green-700 transition-colors duration-300'>Reccomend</button>   
                </div>
                
            </div>
        </>
    )
}

export default Search