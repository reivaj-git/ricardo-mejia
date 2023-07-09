import React from 'react';

const Formulario = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="bg-dark p-4 rounded-lg">
        <h2 className="text-white text-lg mb-4">Formulario de contacto</h2>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-darkSecundary text-white focus:outline-none focus:ring-primary"
            type="text"
            id="nombre"
            name="nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="correo">
            Correo electrónico
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-darkSecundary text-white focus:outline-none focus:ring-primary"
            type="email"
            id="correo"
            name="correo"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="asunto">
            Asunto
          </label>
          <input
            className="w-full px-3 py-2 rounded-md bg-darkSecundary text-white focus:outline-none focus:ring-primary"
            type="text"
            id="asunto"
            name="asunto"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            className="w-full px-3 py-2 rounded-md bg-darkSecundary text-white focus:outline-none focus:ring-primary"
            id="mensaje"
            name="mensaje"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          className="bg-enfasis text-white px-4 py-2 rounded-md hover:bg-primary transition-colors duration-300"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
