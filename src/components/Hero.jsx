import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen md:flex-row mx-auto bg-dark text-white relative">

      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="typing-animation">Ricardo Javier Mejía González</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Front-end web developer con React
        </p>
      </div>

      <div m-0>
        <img className="w-56 md:w-64 lg:w-full mb-8" src="/images/perfil.png" alt="Foto de perfil" />
      </div>

        <div className='md:absolute md:bottom-40 md:left-24'>
          <ul className="flex space-x-4  md:left-4 md:bottom-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300 text-3xl">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="bx bxl-linkedin text-3xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="bx bxl-github text-3xl"></i>
              </a>
            </li>
            {/* Agrega aquí más íconos de redes sociales */}
          </ul>
        </div>

    </section>
  );
}

export default Hero;
