import { useState } from 'react'
import ProjImg from '../assets/imgs/Sem título.png'

export default function Project() {

    const [hideShadow, setHideShadow] = useState(true)

    const hoverShadow = () => {
        setHideShadow(!hideShadow)
    }

    return (
        <div id="project" className='m-[50px] h-screen'>
            <div onMouseEnter={hoverShadow} onMouseLeave={hoverShadow} className={`projects-container rounded-xl p-5
             ${hideShadow ? "shadow-[0_0_10px_0px_rgba(47,19,73,1)]" : "shadow-none"}`}>
                <img src={ProjImg} alt="2" className='w-full rounded-lg' />
                <p className='pt-5 px-2 text-justify'> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam quia quidem reiciendis itaque voluptatem incidunt dolorem.
                    Minus animi ducimus quibusdam dolore minima voluptatibus at!
                    Repellendus inventore libero vel laboriosam quia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis architecto veniam ex est, soluta, tenetur neque id volup
                    tas, fuga culpa saepe quidem autem asperiores ipsum libero
                    quod blanditiis obcaecati maiores?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum harum nisi facilis voluptates est eveniet odit. Vel cum
                    que aspernatur officia numquam, fugit perspiciatis amet
                    culpa est ut!
                </p>
            </div>
        </div>
    )
}