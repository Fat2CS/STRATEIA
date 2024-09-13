import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            StrateIA
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Accueil
            </Link>
            <Link
              to="./PrincingPages"
              className="text-gray-600 hover:text-blue-600"
            >
              Tarifs
            </Link>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              À propos
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Commencer
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/tarifs"
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Tarifs
            </Link>
            <a
              href="#about"
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </a>
            <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Commencer
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
