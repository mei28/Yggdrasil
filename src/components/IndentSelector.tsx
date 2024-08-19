import React from 'react';

type IndentSelectorProps = {
  indentSize: number;
  onChange: (size: number) => void;
};

const IndentSelector: React.FC<IndentSelectorProps> = ({ indentSize, onChange }) => {
  return (
    <label className="mt-4 flex items-center text-gray-600">
      <span className="mr-2">Indent size:</span>
      <select
        value={indentSize}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border border-gray-300 rounded-md p-1"
      >
        <option value={1}>1 space</option>
        <option value={2}>2 spaces</option>
        <option value={4}>4 spaces</option>
        <option value={8}>8 spaces</option>
      </select>
    </label>
  );
};

export default IndentSelector;
