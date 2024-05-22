import React from 'react';
import experiencia1 from '../assets/experiencia1.png';
import experiencia2 from '../assets/experiencia2.png';
import experiencia3 from '../assets/experiencia3.png';
import experiencia4 from '../assets/experiencia4.png';
import { Link } from 'react-router-dom';





function PaginaIntro() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline italic">
                Tu bienestar empieza aqui!
            </h1>
            <div className="texto-intro">
                <h2> Comienza a construir tu bienestar financiero </h2>
            </div>
            <div className="intro">
                <p> Prueba una reunión gratis con uno de nuestros coaches sin compromiso y da el primer paso para cumplir tus metas </p>
                <img src="./assets/img-index.png" alt="" />
            </div>
            <div className="botonesIndex">
                <a href="./form/" className="botonReunion"> Comienza aquí</a>

                <a href="./planes/" className="botonPlanes"> Conoce nuestros planes</a>
                <div className="h-4 w-4 bg-violet-100">


                </div>
            </div>

        </main>
    );
}

export default function ExperienciaSF() {

    const images = [
        {
            src: experiencia1,
            alt: 'exp1',
            text: 'Control de tus finanzas'
        },
        {
            src: experiencia2,
            alt: 'exp2',
            text: 'Claridad en tus objetivos'
        },
        {
            src: experiencia3,
            alt: 'exp3',
            text: 'Comprensión de finanzas'
        },
        {
            src: experiencia4,
            alt: 'exp4',
            text: 'Confianza en tus decisiones'
        }
    ]

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <span className="text-lg font-semibold text-gray-600">LAS CUATRO C</span>
                    <h3 className="mt-2 text-3xl font-bold text-gray-800">La experiencia somosfin</h3>
                    <p className="mt-4 text-gray-600">Descubre todas tus posibilidades con nuestro servicio</p>
                </div>
                <div className='flex items-end w-full justify-evenly'>
                    {images.map(image => {
                        return (
                            <div key={image.text} className="flex flex-col items-center h-fit">
                                <img src={image.src} alt={image.alt} />
                                <p className="font-bold text-lg">{image.text}</p>
                            </div>
                        );
                    })}

                </div>

            </div>
            <Link to="/form" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Comienza aquí</Link>

        </section>
    );
}

