import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-6 py-4 w-full bg-gray-200 text-center text-gray-700">
      <p>&copy; {currentYear} Mingzhe Yang. All rights reserved.</p>
      <p>
        <a href="https://github.com/mei28/Yggdrasil" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Contribute on GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;

