import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <main className="p-8 bg-dark ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        <div>
          <Card
            title="Citas"
            image="/images/citas.png"
            technologies={['html5', 'react', 'tailwind-css']}
            description="Este proyecto utiliza React y Tailwind CSS, y hace uso de localStorage. Su objetivo principal es crear un sistema para la veterinaria que permita llevar un registro de los datos de las mascotas."
            visitLink="https://citas-rjm.netlify.app/"
            codeLink="https://github.com/reivaj-git/userList"
          />
        </div>
        <div>
          <Card
            title="UserList"
            image="/images/userlist.png"
            technologies={['html5', 'react', 'tailwind-css']}
            description="Este proyecto utiliza React y Tailwind CSS y React Form Hook. Su objetivo principal es crear una lista de usuarios donde puedes crear, editar y eliminar al usuario además de brindar notificaciones sin librerias."
            visitLink="https://userlist-rjm.netlify.app/"
            codeLink="https://github.com/reivaj-git/userList"
          />
        </div>
        <div>
          <Card
            title="Rick and Morty"
            image="/images/rickandmorty.png"
            technologies={['html5', 'react', 'tailwind-css']}
            description="Este proyecto utiliza React y Tailwind CSS, además de realizar el consumo de la API de Rick and Morty. Puedes buscar por Id para encontrar los habitantes de cada universo."
            visitLink="https://rick-and-morty-rjm.netlify.app/"
            codeLink="https://github.com/reivaj-git/rick-and-morty"
          />
        </div>
        <div>
          <Card
            title="Pokedex"
            image="/images/pokedex.png"
            technologies={['html5', 'react', 'tailwind-css', 'axios']}
            description="Este proyecto utiliza React, Axios, Enrutado, protección de rutas, Tailwind CSS y consumo de API. Además te permite hacer busquedas de pokemon y filtrado por tipo de pokemon"
            visitLink="https://citas-rjm.netlify.app/"
            codeLink="https://github.com/reivaj-git/pokedex-rjm"
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
