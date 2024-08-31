import React from 'react'
// import Search from '../components/search'

const Home: React.FC = () => {

    return (
        <>
            <div className='w-screen min-h-screen h-screen bg-letterboxd-background flex flex-col items-center'>
                <h1 className='text-letterboxd-text font-semibold text-6xl mt-20 mb-10'>Movie Reccomender</h1>
               
                <div className='w-full max-w-md'>
                    <div className='flex flex-col items-center'>
                        <input 
                            type="text"
                            placeholder="Search..."
                            className="w-full p-5 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button className='bg-green-500 rounded-lg text-center text-white p-4 mt-5 hover:bg-green-700 transition-colors duration-300'>Reccomend</button>   
                    </div>
                </div>
                <footer className='bg-letterboxd-footer absolute bottom-0 h-20 w-full flex flex-col-reverse'>
                    
                    <p className='text-letterboxd-footText text-center text-sm mb-2'>Created By: Ethan Jensen and Brynn Barton</p>
                </footer>
            </div>
        </>
    )
}

export default Home