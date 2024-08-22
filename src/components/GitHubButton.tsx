import React from 'react';
import { FiGithub } from 'react-icons/fi';

const GitHubButton: React.FC = () => {
  return (
    <a
      href="https://github.com/mei28/Yggdrasil"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      aria-label="GitHub Repository"
    >
      <FiGithub size={20} className="mr-2" />
      GitHub
    </a>
  );
};

export default GitHubButton;
