import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface CardProps {
    name: string;
    github: string;
    linkedin: string;
    picture: string;
}

const Card: React.FC<CardProps> = ({name, github, linkedin, picture}) => {
    return (
        <div className='bg-letterboxd-background shadow-md rounded-lg overflow-hidden border flex flex-col items-center'>
            <img 
                src={picture}
                alt='img'
                className='w-24 h-24 rounded-full border-2 border-gray-300 m-2'    
            />
            <h3 className='text-lg text-letterboxd-text mx-4 my-2'>{name}</h3>
            <div className='flex flex-row'>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-600 mx-1 hover:text-gray-900 text-2xl" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mx-1 hover:text-blue-800 text-2xl" />
                </a>
            </div>
        </div>
    )
}

export default Card