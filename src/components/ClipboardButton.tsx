import React from 'react';
import { FiClipboard } from 'react-icons/fi';

type ClipboardButtonProps = {
  onCopy: () => void;
};

const ClipboardButton: React.FC<ClipboardButtonProps> = ({ onCopy }) => {
  return (
    <button
      className="flex items-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
      onClick={onCopy}
      aria-label="Copy to clipboard"
    >
      <FiClipboard size={16} className="text-gray-600 hover:text-gray-800" />
    </button>
  );
};

export default ClipboardButton;

