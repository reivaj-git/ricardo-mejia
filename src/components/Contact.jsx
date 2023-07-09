import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[1200px] p-2 mx-auto"
      netlify
      data-netlify="true"
    >
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-text">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          {...register('nombre', { required: true })}
          className={`w-full px-3 py-2 border rounded-md ${errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.nombre && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-text">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
          className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.email && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="asunto" className="block text-text">
          Asunto
        </label>
        <input
          type="text"
          id="asunto"
          {...register('asunto', { required: true })}
          className={`w-full px-3 py-2 border rounded-md ${errors.asunto ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.asunto && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="mensaje" className="block text-text">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          {...register('mensaje', { required: true })}
          className={`w-full px-3 py-2 border rounded-md ${errors.mensaje ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.mensaje && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-enfasis text-white px-4 py-2 rounded-md"
      >
        Enviar
      </button>
    </form>
  );
};

export default Contact;
