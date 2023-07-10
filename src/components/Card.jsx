import React from 'react';

const Card = ({ image, title, technologies, description, visitLink, codeLink }) => {
  return (
    <div className="w-full bg-darkSecundary rounded-lg overflow-hidden shadow-lg hover:border-2 border-primary">
      <img
        className="w-full transition-transform duration-300 transform-gpu scale-100 hover:scale-105"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <div className="font-bold text-xl text-center text-enfasis mb-2">{title}</div>
        <div className="flex gap-4 mb-2 items-center justify-center">
          {technologies && technologies.map((technology, index) => (
            <span
              key={index}
              className="transition-transform duration-300 transform-gpu hover:scale-110"
            >
              {getIcon(technology)}
            </span>
          ))}
        </div>
        <p className="text-white text-base text-justify">{description}</p>
      </div>

      <div className="flex justify-center gap-4 mb-4 mt-2">
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 p-4 bg-primary hover:bg-enfasis text-white rounded-md font-semibold"
        >
          Visitar
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 p-4 bg-primary hover:bg-enfasis text-white rounded-md font-semibold"
        >
          Código
        </a>
      </div>
    </div>
  );
};

const getIcon = (technology) => {
  switch (technology) {
    case 'html5':
      return <i className="bx bxl-html5 text-2xl text-orange-600"></i>;
    case 'react':
      return <i className="bx bxl-react text-2xl text-indigo-500"></i>;
    case 'tailwind-css':
      return <i className="bx bxl-tailwind-css text-2xl text-blue-500"></i>;
    case 'axios':
      return (
        <div className="w-6 h-6">
          <img src="/images/axios.png" alt="" />
        </div>
      );
    default:
      return null;
  }
};

export default Card;
