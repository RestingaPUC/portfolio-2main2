import React from "react";
import image from '../assets/imgs/IT.jpeg'

export default function About() {
    return (
        <div className="relative">
            <img src={image} alt="IT" className="h-[calc(100vh-57px)] w-screen object-cover" />
            <div className="flex flex-col absolute top-20 text-white m-5 text-justify">
                <p className="text-[33px] self-center">Olá, me chamo Alberto</p>
                <p className="text-[22px] self-center pt-3 pb-16">Boas-vindas ao meu portfolio</p>
                <p className="text-2xl">Estudante no segundo semestre de ciência da computação com fome por conhecimento
                    e que deseja ser um destaque em sua área. Sempre fui apaixonado por tecnologia e
                    fascinado por tudo que ela nos permite no dia a dia, fazer parte dessa indústria
                    e poder contribuir para que ela seja ainda mais incrível é um objetivo de vida.
                </p>
            </div>
            <svg className="absolute bottom-0 flex text-center" width="150" height="81" viewBox="0 0 150 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5L74.2879 75.2777C74.6795 75.675 75.3205 75.675 75.7121 75.2777L145 5"
                    stroke="white" stroke-width="10" stroke-linecap="round" />
            </svg>
        </div>
    )
}