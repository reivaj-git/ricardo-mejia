import React from 'react';

const Formulario = () => {
  return (
    <section className='max-w-[1200px] mx-auto p-8'>
      <form action="https://formsubmit.co/javi26028@outlook.com" method="POST" >
        <input type="hidden" name="form-name" value="contact" />
        <div className="bg-darkrounded-lg">
          <h2 className="text-enfasis text-lg mb-4">Formulario de contacto</h2>
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
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-enfasis transition-colors duration-300"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
