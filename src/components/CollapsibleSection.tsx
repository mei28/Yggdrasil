import React, { useState } from 'react';

type CollapsibleSectionProps = {
  title: string;
  children: React.ReactNode;
};

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="text-lg font-semibold text-gray-800 flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`ml-2 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      {isOpen && <div className="mt-2 text-gray-700">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;

