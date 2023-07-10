import React from 'react';
import Card from './Card';

const AboutMe = () => {
  return (
    <section className="about-me py-16 bg-dark text-text max-w-[1200px] mx-auto p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
        <div >
          {/* className="grid grid-cols-1 md:grid-cols-2 gap-8" */}
          <div>
            <p className="text-lg mb-4 text-justify">
              ¡Hola! Soy un apasionado y autodidacta desarrollador web front-end con experiencia en tecnologías de vanguardia como React, JavaScript y Tailwind CSS. Me enorgullezco de mi sólida comprensión de los principios de diseño web y mi habilidad demostrada para crear interfaces atractivas y funcionales. Además de mis habilidades técnicas, me destacó por mis excelentes habilidades de comunicación y trabajo en equipo.
            </p>
          </div>
          <div>
            {/* <Card
              name="Tu Nombre"
              title="Developer front end"
              image="/images/perfil.png"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
