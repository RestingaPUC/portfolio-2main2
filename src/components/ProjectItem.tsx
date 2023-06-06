import React from 'react';
import { useState } from 'react'

interface ProjectItemProps {
    src: 
}
export default function ProjectItem(props: ProjectItemProps) {

    const [isHovered, setIsHovered] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    }

    const descriptionText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quia quidem reiciendis itaque voluptatem incidunt dolorem. Minus animi ducimus quibusdam dolore minima voluptatibus at! Repellendus inventore libero vel laboriosam quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto veniam ex est, soluta, tenetur neque id volup tas, fuga culpa saepe quidem autem asperiores ipsum libero quod blanditiis obcaecati maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum nisi facilis voluptates est eveniet odit. Vel cum que aspernatur officia numquam, fugit perspiciatis amet culpa est ut!"

    const truncatedText = isExpanded ? descriptionText : descriptionText.slice(0, 200) + '...';

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`
            rounded-xl p-5 transition-all duration-100 mb-4
            ${isHovered ? "shadow shadow-purple-700" : "shadow-[0_1px_10px_0px_rgba(0,0,0,0.1)]"}`}>

            <img src={props.src} alt="2" className='w-full rounded-lg' />

            <p className='pt-5 px-2 text-justify'>
                {truncatedText}
            </p>

            {!isExpanded && (
                <button onClick={toggleDescription} className="text-blue-500 hover:underline">
                    Read more
                </button>
            )}
        </div>
    )
}