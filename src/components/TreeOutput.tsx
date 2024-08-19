import React from 'react';

type TreeOutputProps = {
  treeText: string;
};

const TreeOutput: React.FC<TreeOutputProps> = ({ treeText }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-md flex-1 text-sm text-gray-700 overflow-auto font-mono">
      <pre>{treeText}</pre>
    </div>
  );
};

export default TreeOutput;

