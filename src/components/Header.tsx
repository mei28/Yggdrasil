import React from 'react';
import GitHubButton from './GitHubButton';

const Header: React.FC = () => (
  <header className="mb-6 flex justify-between items-center w-full max-w-5xl">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Yggdrasil</h1>
      <p className="text-lg text-gray-600">Generate and visualize your directory structure with ease.</p>
    </div>
    <GitHubButton />
  </header>
);

export default Header;

