
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../context/AuthProvider";

const Header = () => {
  const { logout } = useAuthContext();
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Gifté</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link to="/customization" className="hover:underline">Customization</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;