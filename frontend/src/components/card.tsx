import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Card: React.FC = (name:string, github:string, linkedin:string, picture:string) => {
    return (
        <div className='bg-letterboxd-background shadow-md rounded-lg overflow-hidden border border-gray-300 flex flex-col items-center'>
            <img 
                src={picture}
                alt='img'
                className='w-24 h-24 rounded-full border-2 border-gray-300'    
            />
            <h3 className='text-lg'>{name}</h3>
            <div className='flex flex-row'>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-600 hover:text-gray-900 text-2xl" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 hover:text-blue-800 text-2xl" />
                </a>
            </div>
        </div>
    )
}

export default Card