import React from 'react';


export default function PaginaIntro() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline italic">
                Hello world!
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

function ExperienciaSF() {
    return (
        <section>
            <div className="experienciaSF">
                <div className="experiencia-intro">
                    <span> LAS CUATRO C </span>
                    <h3> La experiencia somosfin</h3>
                    <p> Descubre todas tus posibilidades con nuestro servicio </p>
                </div>
                <div className="experiencia-cuadro">
                    <div className="experiencias">
                        <div className="experiencia1">
                            <img src="./assets/exp-1.png" alt="" />
                            <p>Control de tus finanzas</p>
                        </div>
                        <div className="experiencia2">
                            <img src="./assets/exp-2.png" alt="" />
                            <p> Claridad en tus objetivos</p>
                        </div>
                        <div className="experiencia3">
                            <img src="./assets/exp-3.png" alt="" />
                            <p>Comprensión de finanzas</p>
                        </div>
                        <div className="experiencia4">
                            <img src="./assets/exp-4.png" alt="" />
                            <p>Confianza en tus decisiones</p>
                        </div>
                    </div>
                </div>
                <a href="./form/" className="boton-experiencia"> Comienza aquí </a>
            </div>
        </section>
    );
}