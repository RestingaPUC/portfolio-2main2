import { useState } from 'react'
import ProjImg from '../assets/imgs/Sem título.png'
import ProjImg2 from '../assets/imgs/kbca.png'
import ProjectItem from './ProjectItem'
import React from 'react'


export default function Project() {

    return (
        <div id="project" className='m-[50px] h-screen projects-container'>
           <ProjectItem></ProjectItem> 
        </div>
    )
}