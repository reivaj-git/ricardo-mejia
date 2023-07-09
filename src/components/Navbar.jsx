import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menu = document.getElementById('navbar-menu');
      const button = document.getElementById('navbar-toggle');

      if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <nav className="bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  md:max-w-[400px]">
            <img className='' src="/images/logoWhite.png" alt="" />
          </div>
          <div className="flex items-center">
            <div className="hidden md:block" id="navbar-menu">
              <a href="#home" className="text-text hover:text-white px-3 py-2">Home</a>
              <a href="#about" className="text-text hover:text-white px-3 py-2">Sobre mí</a>
              <a href="#technologies" className="text-text hover:text-white px-3 py-2">Proyectos</a>
              <a href="#projects" className="text-text hover:text-white px-3 py-2">Contacto</a>
              <a href="#cv" className="text-text hover:text-white px-3 py-2">Descargar CV</a>
            </div>
            <div className="md:hidden">
              <button
                id="navbar-toggle"
                className="text-text hover:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-dark mt-2" id="navbar-menu">
            <a href="#home" className="block text-text px-3 py-2">Home</a>
            <a href="#about" className="block text-text px-3 py-2">Sobre mí</a>
            <a href="#technologies" className="block text-text px-3 py-2">Tecnologías</a>
            <a href="#projects" className="block text-text px-3 py-2">Proyectos</a>
            <a href="#cv" className="block text-text px-3 py-2">Descargar CV</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
