import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 Gifté. All rights reserved.</p>
      <p>
        <a href="/contact" className="text-blue-400 hover:underline">Contact Us</a> | 
        <a href="/faq" className="text-blue-400 hover:underline"> FAQ</a>
      </p>
    </footer>
  );
};

export default Footer;